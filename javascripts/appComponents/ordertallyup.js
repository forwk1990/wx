/**
 * Created by team on 16/3/1.
 */
define(["util", "model"], function (Util, Model) {
    return can.Component.extend({
        tag: "ordertallyup",
        template: can.view(Util.getView("ordertallyup")),
        viewModel: {
            order: null,
            verifyCode: "",
            carSeatShowFlag: false,
            timeInterval: 0,
            verifyCodeMessage: can.compute(function () {
                if (this.attr("timeInterval") <= 0) {
                    return "点击获取";
                } else {
                    return this.attr("timeInterval") + "秒";
                }
            }),
            init: function () {
                var self = this;

                self._render();
            },
            _render: function () {
                var orderInfo = Util.getOrderInfo();
                var calculateResult = Util.calculateSum();
                orderInfo.total = calculateResult.price;
                orderInfo.originalTotal = calculateResult.originalPrice;
                orderInfo.isDiscount = orderInfo.total != orderInfo.originalTotal;
                // 立减多少钱
                orderInfo.balanceAccount = (calculateResult.originalPrice - calculateResult.price).toFixed(2);
                if (orderInfo && orderInfo.items && orderInfo.items.length >= 0) {
                    this.attr("order", orderInfo);
                    this.attr("carSeatShowFlag", orderInfo.type == 3);
                } else {
                    Util.Route.route(this, "storemenu");
                }

                var self = this;
                setTimeout(function () {
                    self.beforeShow();
                    Util.Busy.stop();
                    if (window._tag) {
                        _tag.dcsMultiTrack('wt.event', 'pay', 'wt.msg', '结算页面加载');
                    }
                }, 1);
            },
            beforeShow: function (paras) {
                var self = this;
                if (Util.tallyupInfo) {
                    var info = Util.tallyupInfo;
                    $("#userName").val(info.tallyupName);
                    $("#invoice").val(info.tallyupInvoice);
                    $("#notes").val(info.tallyupNotes);
                    $("#phone").val(info.tallyupPhone);
                    Util.tallyupInfo = null;
                } else {
                    // 页面加载前 清空信息
                    //$("#phone").val("");
                    $("#userName").val("");
                    // 顾客姓名
                    $("#invoice").val("");
                    // 发票
                    //$("#notes").val("");
                    // 备注
                    var minutes = -1;
                    var userInfoTime = Util.getSessionItem("preorder.wap.userInfoTime");
                    if (userInfoTime) {
                        minutes = Util.TimeDifference(userInfoTime, Util.Format.dateFormater(new Date(), Util.Format.masks.DateTime));
                    }
                    var userInfo = Util.getSessionItem("preorder.wap.userInfo");
                    if (userInfo && minutes >= 0 && minutes < 30) {
                        $("#userName").val(userInfo.name);
                        $("#invoice").val(userInfo.invoiceTitle);
                        $("#notes").val(userInfo.iremark);
                    }
                    if (Util.getLocalItem("preorder.wap.invoiceTitle")) {
                        $("#invoice").val(Util.getLocalItem("preorder.wap.invoiceTitle"));
                    }
                    var phone = Util.getLocalItem("preorder.wap.phone");
                    $("#phone").val(phone);
                }
                this.initCss();
                this.initDefaultPayType();
                this._renderCartItems();
                //this.initOrder_Check();
            },
            initCss: function () {
                //取餐餐厅、时间样式
                var jch = $("#j-con-left").height();
                $("#j-con-right").css("height", jch);
                var rth = jch - 21;
                $("#right-time-js").css("height", rth);
                $("#right-time-js").css("line-height", rth + "px");
            },
            initDefaultPayType: function () {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    //说明是微信内置浏览器,默认使用微信支付
                    this.attr("isWx", true);
                }
            },
            encrypt: function (paras) {
                if (paras.length < 6) {
                    return paras;
                }
                var str = paras.substring(3, paras.length - 4).replace(/./g, "*");
                paras = paras.substr(0, 3) + str + paras.substr(paras.length - 4);
                return paras;
            },
            //更新购物车订单明细
            updateCartOrderItem: function (item) {
                var self = this;
                var orderInfo = Util.getOrderInfo();
                $.each(orderInfo.items, function (index, orderItem) {
                    if (orderItem.systemId == item.systemId) {
                        orderItem.remainQuantity = item.remainQuantity;
                        if (orderItem.taste == item.taste) {
                            if (item.quantity === 0) {
                                orderInfo.items.splice(index, 1);
                            } else {
                                orderItem.quantity = item.quantity;
                            }
                            orderInfo.total = Util.calculateSum().price;
                        }
                    }
                });
                self.attr("order", orderInfo);
                self._renderCartItems();
                if (!orderInfo.items || orderInfo.items.length == 0) {
                    //TODO 购物车是空，请重新点餐
                    Util.showInstantMessage({
                        content: Config.Message.emptyOrder,
                        duration: 2000
                    });
                    $(".pay-list-box").hide();
                    var timeout = window.setTimeout(function () {
                        window.clearTimeout(timeout);
                        Util.Busy.start({
                            content: "正为您跳转..."
                        });
                        Util.Route.route(this, {page: "index.html"});
                    }, 2000);
                }
            },
            _renderCartItems: function () {
                //若是大单，则显示大单的描述
                if (Util.getSessionItem("preorder.wap.bigOrderValue") == "1") {
                    if ($(".bigOrderTip").css("display") === "none") {
                        $("#li_notes").removeClass("no-border");
                        $(".bigOrderTip").show();
                    }
                } else {
                    $("#li_notes").addClass("no-border");
                    $(".bigOrderTip").hide();
                }
            },
            checkSubmitData: function () {
                var self = this;
                var phoneNumber = $("#phone").val();
                if (!phoneNumber) {
                    Util.showInstantMessage({
                        content: "您还未输入手机号",
                        duration: 3000
                    });
                    $("#phone").css("border", "1px solid #ff6326");
                    $("#phone").focus();
                    return false;
                }
                var isPhone = Util.utilities.reCellphone.test(phoneNumber);
                if (!isPhone) {
                    Util.showInstantMessage({
                        content: Config.Message.invalidatedPhoneNumber,
                        duration: 3000
                    });
                    $("#phone").css("border", "1px solid #ff6326");
                    $("#phone").focus();
                    return false;
                } else {
                    $("#phone").css("border-width", "0px");
                }
                var orderInfo = Util.getOrderInfo();

                if (orderInfo.type == 3) {
                    var carNumber = $("#carNumber").val();
                    var seatNumber = $("#seatNumber").val();
                    if (!carNumber) {
                        Util.showInstantMessage({
                            content: "您还未输入车厢号",
                            duration: 3000
                        });
                        $("#carNumber").css("border", "1px solid #ff6326");
                        $("#carNumber").focus();
                        return false;
                    }
                    if (!seatNumber) {
                        Util.showInstantMessage({
                            content: "您还未输入座位号",
                            duration: 3000
                        });
                        $("#seatNumber").css("border", "1px solid #ff6326");
                        $("#seatNumber").focus();
                        return false;
                    }
                }

                if (!orderInfo || !orderInfo.items || orderInfo.items.length == 0) {
                    Util.showInstantMessage({
                        content: Config.Message.noOrderInfo,
                        duration: 3000
                    });
                    return false;
                }
                return true;
            },
            getVerifyCode: function () {
                var self = this, time = 60;
                self.attr("verifyCode", Util.randomOfNumber(4));
                self.attr("timeInterval", 60);
                var interval = window.setInterval(function () {
                    self.attr("timeInterval", --time);
                    if (time <= 0) {
                        window.clearInterval(interval);
                    }
                }, 1000);
            }
        },

        events: {
            //购物车中产品加数量
            ".cartAdd tap": function (el, ev) {
                var item = can.data(can.$(el).parent().parent(), 'orderItem');
                if (item.remainQuantity == 0 && !item.isParent) {
                    Util.showInstantMessage({content: "该产品最多可订购" + item.totalRemainQuantity + "份"});
                    return false;
                }
                item.quantity = item.quantity + 1;
                item.remainQuantity = item.remainQuantity - 1;

                this.scope.updateCartOrderItem(item);
            },
            //购物车中产品减数量
            ".cartMinus tap": function (el, ev) {
                var item = can.data(can.$(el).parent().parent(), 'orderItem');
                item.quantity = item.quantity - 1;
                item.quantity = item.quantity < 0 ? 0 : item.quantity;
                item.remainQuantity = item.remainQuantity + 1;
                this.scope.updateCartOrderItem(item);
            },
            // 回退按钮
            ".head-back tap": function () {
                console.info("点击返回menu列表....");
                Util.Busy.start();
                // 返回菜品页面
                Util.Route.back({pageChageOption: null});
            },
            // 下单支付
            '.pay-b tap': function (el, ev) {
                var self = this.viewModel;
                var orderInfo = Util.getOrderInfo();
                orderInfo.total = Util.calculateSum().price;
                var phoneNumber;
                if (!self.checkSubmitData()) {
                    return;
                }
                phoneNumber = $("#phone").val();

                // 订单总额<=0时 不可以支付
                if (orderInfo.total <= 0) {
                    Util.showInstantMessage({content: "很抱歉！总金额错误，无法为您下单"});
                    return false;
                }

                Util.Busy.start({
                    content: Config.Message.tallyuping
                });
                var orderRemarks = $("#notes").val();
                orderInfo.phoneNumber = phoneNumber;
                orderInfo.orderRemarks = (orderRemarks == null || orderRemarks == undefined || orderRemarks == "") ? "无" : orderRemarks;
                var parameters = {
                    type: orderInfo.type,
                    //pay: orderInfo.pay ? "1" : "0",
                    pay: "1",
                    seatId: orderInfo.seatId,
                    cloudId: orderInfo.cloudId,
                    totalPrice: orderInfo.total * 1, /* 1以后可以换成统一折扣率 */
                    openId: orderInfo.openId,
                    device: "weixin",
                    phone: phoneNumber,
                    payMethod: "3",
                    foodInfo: [],
                    orderRemarks: orderRemarks
                };
                if (orderInfo.type == 3) {
                    parameters["orderRemarks"] = $("#carNumber").val() + "\n" + $("#seatNumber").val() + "\n" + (parameters["orderRemarks"] == "无" ? "" : parameters["orderRemarks"]);
                    orderInfo.orderRemarks = parameters["orderRemarks"];
                }
                can.each(orderInfo.items, function (item, index) {
                    var foodObject = {};
                    foodObject.foodNum = item.quantity;
                    foodObject.id = item.systemId;
                    // 套餐强行去掉口味
                    foodObject.taste = item.setMealFlag ? "" : item.taste;
                    foodObject.suitFoodType = item.setMealFlag ? 1 : 0;
                    foodObject.items = item.items;
                    parameters.foodInfo.push(foodObject);
                });


                //return;

                // 下单
                Model.Order.create({key: JSON.stringify(parameters)}, function (orderData) {

                    // 保存订单信息
                    orderInfo.orderNumber = orderData.orderNum;
                    orderInfo.tableInfo = orderData.tableInfo;
                    orderInfo.time = new Date();
                    Util.saveOrderInfo(orderInfo);

                    // 下单成功后，根据订单号和openId发起支付,支付页面为wxPay.html来完成
                    console.info("下单成功! orderNumber = " + orderData.orderNum + " \r\n openId = " + orderInfo.openId);

                    var payMode = orderData.payMode;
                    if (payMode == null || payMode == undefined) {
                        payMode = PayMode.MSPay;
                    }

                    switch (payMode) {
                        case PayMode.NoPay:
                        {
                            // 关闭
                            Util.Busy.stop();

                            // 跳转成功页面
                            Util.Route.route(this, {page: "order", func: "success"});

                            break;
                        }
                        case PayMode.WFTPay:
                        {
                            Model.WX.WFTPay({
                                orderNum: orderData.orderNum,
                                method: 'submitOrderInfo', // 2016-07-07 威富通接口调试新增参数
                                openId: orderInfo.openId,
                                cloudId: orderInfo.cloudId,
                                cloudName: orderInfo.cloudName
                            }, function (data) {
                                window.location.href = 'https://pay.swiftpass.cn/pay/jspay?token_id=' + data.token_id + '&showwxtitle=1';
                            });
                            break;
                        }
                        case PayMode.MSPay:
                        default:
                        {
                            Model.WX.MSPay({
                                orderNum: orderData.orderNum,
                                openId: orderInfo.openId,
                                cloudId: orderInfo.cloudId,
                                cloudName: orderInfo.cloudName
                            }, function (data) {
                                // 构建查询参数，这些参数在wxPay页面会作为支付参数使用
                                var queryString = Util.setQueryString({
                                    "appId": Config.WX.appId,
                                    "timeStamp": data.timeStamp,
                                    "signType": data.signType,
                                    "package": data.package,
                                    "nonceStr": data.nonceStr,
                                    "paySign": data.paySign
                                });
                                window.location.href = Config.wapcontext + "wxPay.html" + queryString;
                            });
                            break;
                        }
                    }
                }, function (responseObject) {
                    Util.showInstantMessage({
                        content: Config.Message.noResponse,
                        duration: 3000
                    });
                    Util.Busy.stop();
                });
            }
        }
    });
});
