/**
 * Created by team on 16/3/1.
 */
define(["util", "model"], function (Util, Model) {
    return can.Component.extend({
        tag: "enqueuedetail",
        template: can.view(Util.getView("enqueuedetail.mustache")),
        viewModel: {
            voucherInfo: null,
            init: function () {
                var self = this;
                self._render();
            },
            _render: function () {
                var self = this;
                var currentStore = Util.getCurrentStore();
                var stateArr = ['refresh', '', 'passed', '', 'canceled', ''];
                var parameters = {
                    wxOpenId: currentStore.wxOpenId,
                    cloudId: currentStore.cloudId
                };

                Model.Store.getWXQueueInfo({key: JSON.stringify(parameters)}, function (result) {
                    if (result.status == '0') {
                        WXQueueInfo = result.data;

                        if (WXQueueInfo.length > 1) {
                            can.each(WXQueueInfo, function (value, index) {
                                value.className = stateArr[value['status']];
                                value.isShow = value.className ? true : false;
                                value.isValid = value.status == 0 ? true : false;
                                value[value.className] = true;
                            });
                        } else {
                            WXQueueInfo.className = stateArr[WXQueueInfo[0]['status']];
                            WXQueueInfo.isShow = WXQueueInfo.className ? true : false;
                            WXQueueInfo.isValid = WXQueueInfo.status == 0 ? true : false;
                            WXQueueInfo[WXQueueInfo.className] = true;
                        }
                        console.log(WXQueueInfo);
                        self.attr("voucherInfo", WXQueueInfo);
                    } else {
                        Util.Route.route(this, "storeList");
                    }
                });
            }
        },
        events: {
            // ���˰�ť
            ".head-home tap": function () {
                console.info("��������̼��б�....");
                Util.Busy.start();
                Util.Route.route(this.viewModel, {page: "store", func: "list"});
            },
            ".cancel_btn tap": function (element, event) {
                var ele = $(element);
                var model = can.data($(element).parent().parent().parent(), "queueInfo");
                if (model.id != '') {
                    var parameters = {
                        queueInfoId: model.id + ""
                    };
                    // ȡ���Ŷ�
                    Model.Store.cancelQueue({key: JSON.stringify(parameters)}, function (Data) {
                        ele.parent().parent().parent().remove();
                    });
                }
            },
            ".delete_btn tap": function (element, event) {
                var ele = $(element);
                var model = can.data($(element).parent().parent().parent(), "queueInfo");
                if (model.id != '') {
                    var parameters = {
                        queueInfoId: model.id + ""
                    };
                    // ɾ���Ŷ�
                    Model.Store.deleteQueueInfo({key: JSON.stringify(parameters)}, function (Data) {
                        if (Data.status == '0')
                            ele.parent().parent().parent().remove();
                    });
                }
            },
            ".ref_btn tap": function (element, event) {
                var ele = $(element);
                var model = can.data($(element).parent().parent().parent(), "queueInfo");
                if (model.id != '') {
                    var parameters = {
                        queueInfoId: model.id + ""
                    };
                    // ˢ���Ŷ�
                    Model.Store.refreshQueueInfo({key: JSON.stringify(parameters)}, function (Data) {
                        console.log(Data);
                        if (Data.status == '0') {

                        }
                    });
                }
            },
        }
    });
});
