/**
 * Created by team on 16/3/1.
 */
define(["util", "model"], function (Util, Model) {
    return can.Component.extend({
        tag: "mydines",
        template: can.view(Util.getView("mydines")),
        viewModel: {
            onTable: "all",
            pageNo: 1,
            dataList: null,
            showItemList: [],
            init: function() {
                Util.Busy.start();
                this.attr("showItemList").splice(0); //清空显示的数据List
                var self = this;
                self.dataList = new Array();
                require(['utils/iscroll.min'],function(){
                    if (window.pageChangeOption && window.pageChangeOption.mydines) {
                        self.dataList = window.pageChangeOption.mydines;
                        setTimeout(function() {
                            self._render();
                            self._pullDownAction();
                            if (window._tag) {
                                _tag.dcsMultiTrack('wt.event', 'mydines', 'wt.msg', '我的用餐页面加载');
                            }
                        },100);
                    } else {
                        setTimeout(function() {
                            self._render();
                            //选中餐厅模式，加载数据
                            self.selectedPatternControl();
                            if (window._tag) {
                                _tag.dcsMultiTrack('wt.event', 'mydines', 'wt.msg', '我的用餐页面加载');
                            }
                        },100);
                    }
                });
            },
            _render: function() {
                var self = this;
                self.pullUpEl = $('#pullUp');
                self.pullUpOffset = 51;
                self.$Message_all = $('<div class="no-rest" id="no-rest-js" >' + '<p>抱歉，没有用餐记录</p>' + '</div>');
                self.$tip_append = $(".rest-list");
                self.$RestaurantList = $("#restaurant_list");
                self.initScroll();
            },
            initScroll: function() {
                var self = this;
                $("#mydines-box").height(window.innerHeight - $(".wrapper-head").height());
                var wrapper = document.getElementById('mydines-box');

                this.myScroll = new iScroll(wrapper, {
                    useTransition: true,
                    topOffset: 0,
                    onRefresh: function() {
                        if (self.pullUpEl.attr('class') == 'loading') {
                            self.pullUpEl.attr('class', '');
                            self.pullUpEl.find('#pullUpLabel').text('上拉加载更多');
                        }
                    },
                    onScrollMove: function() {
                        if (this.y < (this.maxScrollY - 5) && self.pullUpEl.attr('class') != 'flip' && self.pullUpEl.css("display") == 'block') {
                            self.pullUpEl.attr('class', 'flip');
                            self.pullUpEl.find('#pullUpLabel').text('准备刷新数据');
                            this.maxScrollY = this.maxScrollY;
                        } else if (this.y > (this.maxScrollY + 5) && self.pullUpEl.attr('class') == 'flip' && self.pullUpEl.css("display") == 'block') {
                            self.pullUpEl.attr('class', '');
                            self.pullUpEl.find('#pullUpLabel').text('上拉加载更多');
                            this.maxScrollY = self.pullUpOffset;
                        }
                    },
                    onScrollEnd: function() {
                        if (self.pullUpEl.attr('class') == 'flip' && self.pullUpEl.css("display") == 'block') {
                            self.pullUpEl.attr('class', 'loading');
                            self.pullUpEl.find('#pullUpLabel').text('刷新数据中...');
                            var tempTab = self.onTable;
                            setTimeout(function() {
                                    self._pullDownAction(tempTab);
                                },
                                1000);
                        }
                    }
                });
            },
            _pullDownAction: function(tap) {
                if (this.onTable == "all") {
                    this._syLoadMoreStores();
                }
            },
            _syLoadMoreStores:function(){
                var self = this;
                var orderInfo = Util.getOrderInfo();
                var condition = {
                    "appId": orderInfo.openId+"",
                    "page": self.pageNo+"",
                    "limit":Config.storeLoadPerPage+""
                };
                Model.Order.loadMyOwnOrderDetailsInfo({key: JSON.stringify(condition)}, function(scret) {
                    // 返回结果成功
                    if (scret.status == "0") {
                        // 初始化列表
                        $.each(scret.data, function (index,item) {
                            $.each(item.foodList, function (index,childitem) {
                                childitem.total = childitem.foodPrice * childitem.foodCount;
                            });
                        });
                        var param = scret.data;
                        self.param = self.param.concat(param);
                        if(param.length < Config.storeLoadPerPage){
                            self.pullUpEl.css("display", "none");
                            $('.pull-box').css("display", "none");
                        }else{
                            self.pullUpEl.css("display", "block");
                            $('.pull-box').css("display", "block");
                            self.pageNo++;
                        }
                        $.each(param,function(t,st){
                            self.attr("showItemList").push(st);
                        });
                        self.myScroll.refresh(0);
                        Util.lazyLoad.lazy({time_out: 1000});
                    }
                });
            },
            //获取我的用餐信息
            getAllResturants: function() {
                var self = this;
                var orderInfo = Util.getOrderInfo();
                self.onTable = "all";
                // 消息等待--超时1分钟
                Util.Busy.start({
                    //"caption" : Constant.app_search.loadingdata,
                    "timeout": "60000"
                });
                // 获取餐厅数据：根据餐厅代码，调用服务器获取数据
                var condition = {
                    "appId": orderInfo.openId+"",
                    "page":'1',
                    "limit":Config.storeLoadPerPage+""
                };
                Model.Order.loadMyOwnOrderDetailsInfo({key: JSON.stringify(condition)}, function(scret) {
                    // 返回结果成功
                    if (scret.status == "0") {
                        self.pageNo = 1;
                        // 初始化列表
                        $.each(scret.data, function (index,item) {
                            $.each(item.foodList, function (index,childitem) {
                                childitem.total = childitem.foodPrice * childitem.foodCount;
                            });
                        });
                        self.dataList = scret.data;
                        self.initShopList(self.dataList,"all");
                    } else {
                        Util.Busy.stop();
                        //异常时，清空数据，显示提示信息
                        self.dataList.splice(0);
                        self.initShopList(self.dataList,"all");
                    }
                });
            },
            initShopList: function(rec,tap) {
                var self = this;
                var param = rec;
                self.param = param;
                if (!isNaN(param.length) && param.length > 0) {
                    if (param.length < Config.storeLoadPerPage) {
                        self.pullUpEl.css("display", "none");
                        $('.pull-box').css("display", "none");
                    } else {
                        self.pullUpEl.css("display", "block");
                        $('.pull-box').css("display", "block");
                        self.pageNo++;
                    }
                    self.attr("showItemList", param);
                    self.myScroll.refresh(0);
                } else {
                    self.$tip_append.append(self.$Message_all);
                }
                Util.Busy.stop();
                self.myScroll.refresh(0);
                Util.lazyLoad.lazy({time_out: 1000});
            },
            //控制餐厅页面显示模式和选中状态
            selectedPatternControl: function() {
                var self = this;
                if(self.onTable == "all") {
                    self.getAllResturants();
                }
            },
        }
    });
});

