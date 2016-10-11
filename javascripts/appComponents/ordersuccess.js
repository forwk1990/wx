/**
 * Created by team on 16/3/1.
 */
define(["util", "model"], function (Util, Model) {
    return can.Component.extend({
        tag: "ordersuccess",
        template: can.view(Util.getView("ordersuccess")),
        viewModel: {
            order: null,
            isExpand:false,
            wapper:"",
            init: function () {
                var self = this;
                self.attr("wapper",Config.wapcontext);
                self._render();
            },
            _shareConfig:function(orderInfo){
                var authorizePageUrl = window.location.href;
                Model.WX.shareConfig({currentUrl: authorizePageUrl}, function (configObject) {
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
                            desc: '我在'+orderInfo.cloudName + "点了这些菜",
                            link: 'http://www.bj-evetime.com/'+Config.wapcontext + "order/detail?orderNo="+orderInfo.orderNumber,
                            imgUrl: orderInfo.imgPath,
                            trigger: function (res) {
                                console.info('分享我的点单');
                            },
                            success: function (res) {
                                console.info('已分享我的点单');
                            },
                            cancel: function (res) {
                                console.info('已取消我的点单');
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
                });
            },
            _render: function () {
                var orderInfo = Util.getOrderInfo();
                var timeInterval = null;
                if (orderInfo && orderInfo.items && orderInfo.items.length >= 0) {
                    orderInfo.total = Util.calculateSum().price;
                    Util.saveOrderInfo(orderInfo);
                    can.each(orderInfo.items, function (foodObject, index) {
                        foodObject.totalPrice = foodObject.price * foodObject.quantity;
                    });
                    this.attr("order", orderInfo);
                    this._shareConfig(orderInfo);
                } else {
                    Util.Route.route(this, {page: "store", func: "menu"});
                }
                timeInterval = setTimeout(function () {
                    clearTimeout(timeInterval);
                    Util.Busy.stop();
                }, 1000);
            },
            finish: function () {
                Util.Busy.start();
                var orderInfo = Util.getOrderInfo();
                orderInfo.totalPrice = 0;
                orderInfo.total = 0;
                orderInfo.items = [];
                orderInfo.orderRemarks = "";
                orderInfo.orderNumber = "";
                Util.saveOrderInfo(orderInfo);
                wx.closeWindow();
                //Util.Route.route(this, {page: "store", func: "menu"});
            },
            toggleExpand:function(){
                this.attr("isExpand",!this.attr("isExpand"));
            }
        },
        events: {

        }
    });
});
