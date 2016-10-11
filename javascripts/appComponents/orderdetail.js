/**
 * Created by team on 16/3/1.
 */
define(["util", "model"], function (Util, Model) {
    return can.Component.extend({
        tag: "orderdetail",
        template: can.view(Util.getView("orderdetail")),
        viewModel: {
            orderDetail:[],
            init: function () {
                var self = this;
                self.attr("wapper",Config.wapcontext);
                Model.Order.getOrderDetail({key: JSON.stringify({"orderNo": Util.getQueryStringValue("orderNo")})}, function (returnObject) {
                    $.each(returnObject.foodChoice, function (index,item) {
                        returnObject.foodChoice[index].total = item.foodPrice * item.foodCount;
                    });
                    self.attr("orderDetail", returnObject);
                });
            }
        },
        events: {

        }

    });
});

