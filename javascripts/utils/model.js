/**
 * Created by team on 16/2/25.
 */

define(["utils/util"], function (util) {
    var request = function (serviceName, standardResponse, parameters, success, error) {
        parameters = parameters || {};
        var orderInfo = util.getOrderInfo();
        if(orderInfo && orderInfo.type == 3){
            Config.domainPath = "lvtukuaidianwebserver";
        }
        var url = Config.baseUrl + Config.domainPath + Config.Api[serviceName];
        if (Config.Debug && serviceName === "getAllMenu") {
            url = "javascripts/storemenu.json";
            standardResponse = false;
        }
        if (Config.Debug && serviceName === "getRestaurantInfo") {
            url = "javascripts/storeMenu.cykf.json";
        }

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: parameters,
            success: function (responseObject) {
                if (standardResponse) {
                    if (responseObject.status == 0) {// 0 表示成功
                        success(JSON.parse(responseObject.data));
                    } else {
                        util.showInstantMessage({content: responseObject.message, duration: 5000});
                        util.Busy.stop();
                    }
                }else{
                    success(responseObject);
                }
            },
            error: function (responseObject) {
                if (typeof error === "function") {
                    error(responseObject);
                } else {
                    util.showInstantMessage({content: "您的网络不可用，请稍后再试...", duration: 5000});
                    util.Busy.stop();
                }
            }
        });
    };
    return {
        Order: {
            create: function (parameters, success, error) {
                request("createOrder", true, parameters, success, error);
            },
            getOrderDetail: function (parameters, success, error) {
                request("getOrderDetail", true, parameters, success, error);
            }
        },
        Store: {
            getAllMenu: function (parameters, success) {
                request("getAllMenu", true, parameters, success);
            },
            getRestaurantName: function (parameters, success, error) {
                request("getRestaurantInfo", true, parameters, success, error);
            },
            loadRestaurantLists: function(parameters, success) {
                request("loadRestaurantLists",false, parameters, success);
            },
            getStoreNotAvailableTime: function(parameters, success) {
                request("getStoreNotAvailableTime",false, parameters, success);
            },
            startWXQueue: function(parameters, success) {
                request("startWXQueue", false,parameters, success);
            },
            pushQueueInfoToPad: function(parameters, success) {
                request("pushQueueInfoToPad",false, parameters, success);
            },
            getWXQueueInfo: function(parameters, success) {
                request("getWXQueueInfo", false,parameters, success);
            },
            getQueueInfoList: function(parameters, success) {
                request("getQueueInfoList", false,parameters, success);
            },
            getTableWatingCountOfEveryTableType: function(parameters, success) {
                request("getTableWatingCountOfEveryTableType",false, parameters, success);
            },
            refreshQueueInfo: function(parameters, success) {
                request("refreshQueueInfo",false, parameters, success);
            },
            cancelQueue: function(parameters, success) {
                request("cancelQueue",false, parameters, success);
            },
            deleteQueueInfo: function(parameters, success) {
                request("deleteQueueInfo",false, parameters, success);
            },
            loadQueuedRestaurantLists: function(parameters, success) {
                request("loadQueuedRestaurantLists",false, parameters, success);
            },
            loadRestaurantListsByKeyword: function(parameters, success) {
                request("loadRestaurantListsByKeyword",false, parameters, success);
            }
        },
        WX: {
            payConfig: function (parameters, success) {
                request("wxPayConfig", false, parameters, success);
            },
            WFTPay: function (parameters, success) {
                request("wxPay", false, parameters, success);
            },
            MSPay:function (parameters, success) {
                request("wxSelfPay", false, parameters, success);
            },
            shareConfig: function (parameters, success) {
                request("wxConfig", false, parameters, success);
            }
        }
    };
});
