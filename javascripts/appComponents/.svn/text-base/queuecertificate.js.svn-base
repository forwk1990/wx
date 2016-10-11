/**
 * Created by team on 16/3/1.
 */
define(["util", "model"], function (Util, Model) {
    return can.Component.extend({
        tag: "queuecertificate",
        template: can.view(Util.getView("queuecertificate.mustache")),
        viewModel: {
            voucherInfo: null,
            click_times: 0,
            init: function () {
                var self = this;
                self._render();
            },
            _render: function () {
                var self = this;
                var currentStore = Util.getCurrentStore(),
                     orderInfo = Util.getOrderInfo();
                var stateArr = ['refresh','','passed','','canceled'];
                var parameters = {
                        wxOpenId: orderInfo.openId,
                        cloudId: currentStore.cloudId
                     };

                Model.Store.getQueueInfoList({key: JSON.stringify(parameters)}, function (result) {
                        if (result.status == '0') {
                            var WXQueueInfo = [];
                            var result_data = result.data;
                            if(result_data.length > 0 ) {
                                can.each(result_data, function (value, index) {
                                    if(value['status'] == 0 || value['status'] == 2 || value['status'] == 4)
                                    {
                                        value.className = stateArr[value['status']];
                                        value.isShow =  value.className ? true : false;
                                        value.isValid =  value.status == 0 ? true : false;
                                        value.watingTime =  value.status == 0 ? value.watingTime : '<span>——</span>';
                                        value[value.className] = true;
                                        for(var i = 0; i< stateArr.length;i++){
                                            if(stateArr[i]){
                                                value[stateArr[i]] = value[stateArr[i]] ? true : false;
                                            }
                                        }
                                        WXQueueInfo.push(value);
                                    }
                                });
                            }
                            self.attr("voucherInfo", WXQueueInfo);
                            Util.Busy.stop();
                        } else {
                            Util.Route.route(this, {page: "store", func: "list"});
                        }
                });

            }
        },
        events: {
            // 回退按钮
            ".head-home tap": function () {
                console.info("点击返回商家列表....");
                Util.Busy.start();
                Util.Route.route(this.viewModel, {page: "store", func: "list"});
            },
            ".cancel_btn tap": function(element, event) {
                var currentStore = Util.getCurrentStore(),
                      self = this.viewModel,
                     ele = $(element),
                     model = can.data($(element).parent().parent().parent(), "queueInfo");
                if(model.id !=''){
                    var parameters = {
                        queueInfoId: model.id+"",
                        status:"4",
                        cloudId:currentStore.cloudId
                    };
                    // 取消排队
                    Model.Store.cancelQueue({key: JSON.stringify(parameters)}, function (result) {
                        if(result.status == '0'){
                            can.each(self.voucherInfo, function (value, index) {
                                if(value.id == model.id ){
                                    value.attr("isValid",false);
                                    value.attr("className",'canceled');
                                    value.attr("canceled",true);
                                    value.attr("countIds",0);
                                    value.attr("refresh",false);
                                    value.attr("watingTime",'<span>——</span>');
                                }
                            });
                        }
                    });
                }
            },
            ".delete_btn tap": function(element, event) {
                var ele = $(element);
                var model = can.data($(element).parent().parent().parent(), "queueInfo");
                if(model.id !=''){
                    var parameters = {
                        queueInfoId: model.id+"",
                        flag:"1"
                    };
                    // 删除排队
                    Model.Store.deleteQueueInfo({key: JSON.stringify(parameters)}, function (Data) {
                        if(Data.status == '0'){
                            ele.parent().parent().parent().remove();
                            if($.trim($('.paidui_info').text()) == ''){
                                Util.Route.route(this, {page: "store", func: "list"});
                                return false;
                            }
                        }
                    });
                }
            },
            ".ref_btn tap": function(element, event) {
                var self = this.viewModel;
                var ele = $(element);
                var click_times = self.attr('click_times');
                ele.animate({animation:'cssAnimation 1s 1 ease'},"slow");
                self.attr('click_times',click_times + 1);
                if(click_times == 1){
                    var model = can.data($(element).parent().parent(), "queueInfo");
                    if(model.id !=''){
                        var parameters = {
                            queueInfoId: model.id+""
                        };
                        // 刷新排队
                        Model.Store.refreshQueueInfo({key: JSON.stringify(parameters)}, function (result) {
                            if(result){
                                can.each(self.voucherInfo, function (value, index) {
                                    if(value.id == model.id ){
                                        if(result.status == '1'){
                                            value.attr("isValid",false);
                                            value.attr("className",'passed');
                                            value.attr("countIds",0);
                                            value.attr("refresh",false);
                                            value.attr("passed",true);
                                            value.attr("canceled",false);
                                            value.attr("watingTime",'<span>——</span>');
                                        }else{
                                            value.attr("countIds",result.data.tableCount);
                                            value.attr("watingTime",result.data.watingTime);
                                        }
                                    }
                                });
                            }
                        });
                    }
                    setTimeout(function(){
                        self.attr('click_times',0);
                    },8000);
                }
                if(click_times > 1){
                    Util.showInstantMessage({
                        content: '请不要频繁刷新!',
                        duration: 2000
                    });
                }
            },
        }
    });
});
