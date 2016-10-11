define(['model','util','constant'],function(Model, Util, Constant) {
    return can.Component.extend({
        tag: "storesearch",
        template: can.view(Util.getView("storesearch")),
        scope: {
            selectedIndex: -1,
            pageNo: 1,
            dataList: null ,
            accPerPage: parseInt((window.innerHeight - $(".wrapper-head").height() - $(".rest-menu").height()) / 66) + 1,
            showItemList: [],
            searchRecord: null ,
            onTable: 'storeseach',
            searchKey: "",
            searchStoreCode: null ,
            showClearInput:false,
            param:[],
            cityCode: Util.getCurrCity().citycode,
            init: function() {
                this.attr("wapper", Config.wapcontext);
                this.attr("cityCode", Util.getCurrCity().citycode);
                Util.Busy.start();
                this.attr("showItemList").splice(0);
                var E = this;
                E.dataList = new Array();
                var D = can.route.attr("storeCode");
                if (D) {
                    this.searchStoreCode = D
                }
                require(["utils/iscroll.min"], function() {
                    setTimeout(function() {
                        E._render()
                    }, 1);
                    if (D) {
                        E.getRestaurantByCode()
                    } else {
                        var F = E.getSearchRecordFromLoacl();
                        if (null  != F) {
                            E.attr("searchRecord", F)
                        }
                    }
                })
            },
            _render: function() {
                var D = this;
                D.pullUpEl = $("#pullUp");
                D.pullUpOffset = 51;
                D.$Message = $("#rest-un-js");
                D.$RestaurantList = $("#restaurant_list");
                D._$TimeSelectcurr = 0;
                D.$TimeSelect = D.$RestaurantList.find("#time_select").remove();
                D.$history = $("#hos-box-js");
                D.$searchlist = $("#rest-on-js");
                D.initScroll();
                Util.Busy.stop();
            },
            initScroll: function() {
                var D = this;
                $("#sec-jg").height(window.innerHeight - $(".wrapper-head").height());
                var E = document.getElementById("sec-jg");
                this.myScroll = new iScroll(E,{
                    useTransition: true,
                    topOffset: 0,
                    onRefresh: function() {
                        if (D.pullUpEl.attr("class") == "loading") {
                            D.pullUpEl.attr("class", "");
                            D.pullUpEl.find("#pullUpLabel").text("上拉加载更多")
                        }
                    },
                    onScrollMove: function() {
                        if (this.y < (this.maxScrollY - 5) && D.pullUpEl.attr("class") != "flip" && D.pullUpEl.css("display") == "block") {
                            D.pullUpEl.attr("class", "flip");
                            D.pullUpEl.find("#pullUpLabel").text("准备刷新数据");
                            this.maxScrollY = this.maxScrollY
                        } else {
                            if (this.y > (this.maxScrollY + 5) && D.pullUpEl.attr("class") == "flip" && D.pullUpEl.css("display") == "block") {
                                D.pullUpEl.attr("class", "");
                                D.pullUpEl.find("#pullUpLabel").text("上拉加载更多");
                                this.maxScrollY = D.pullUpOffset
                            }
                        }
                    },
                    onScrollEnd: function() {
                        if (D.pullUpEl.attr("class") == "flip" && D.pullUpEl.css("display") == "block") {
                            D.pullUpEl.attr("class", "loading");
                            D.pullUpEl.find("#pullUpLabel").text("刷新数据中...");
                            setTimeout(function() {
                                D._pullDownAction()
                            }, 1000)
                        }
                    }
                })
            },
            _pullDownAction: function() {
                var self = this;
                self.attr('pageNo',self.pageNo+1);
                $('.search-button').trigger('tap');
                self.initShopList(this.dataList);
                self.myScroll.refresh(0);
            },
            _scrollRefresh: function(G) {
                var F = this;
                var E = $(".rest-list").height();
                var D = $("#sec-jg").height();
                if (E > D) {
                    F.myScroll.refresh(0);
                    if (G == 0) {
                        F.myScroll.scrollToElement("#restaurant_list li:first-child", 400)
                    } else {
                        F.myScroll.scrollToElement("#restaurant_list li:nth-child(" + G + ")", 400)
                    }
                }
            },
            eachSearchRecordItems: function() {
                var I = this;
                var G = new Array();
                var H = {};
                var E = I.getSearchRecordFromLoacl();
                H.searchKey = Util.searchKey;
                H.dateTime = new Date().getTime();
                G.push(H);
                if (null  != E) {
                    var D = E;
                    for (var F = 0; F < D.length; F++) {
                        var J = {};
                        if (D[F].searchKey != Util.searchKey) {
                            J.searchKey = D[F].searchKey;
                            J.dateTime = D[F].dateTime;
                            G.push(J)
                        }
                        if (G.length == 4) {
                            break
                        }
                    }
                }
                I.saveSearchRecordTolocal(G)
            },
            getSearchRecordFromLoacl: function() {
                return Util.getLocalItem("preorder.wap.searchRecord")
            },
            saveSearchRecordTolocal: function(D) {
                Util.setLocalItem("preorder.wap.searchRecord", D)
            },
            removeSearchRecordFromLoacl: function() {
                Util.removeLocalItem("preorder.wap.searchRecord")
            },
            getRestaurantByCode: function() {
                var E = this;
                $(".sec-input input").attr("readonly", "readonly");
                $(".sec-input input").blur();
                setTimeout(function() {
                    $(".sec-input input").removeAttr("readonly")
                }, 500);
                E.clearBeforeData();
                Util.Busy.start();
                if (E.searchStoreCode) {
                    var D = {
                        "storeCodeList": [E.searchStoreCode],
                    };
                    Model.Store.getRestaurantByCode(D, function(H) {
                        E.searChCallBack(H, false);
                        if (H.status == "ok" && H.datUtil.store && H.datUtil.store.length > 0) {
                            var G = H.datUtil.store[0];
                            var F = {
                                name: G.cityName,
                                citycode: G.citycode
                            };
                            Util.saveCurrCity(F);
                            E.attr("cityCode", G.citycode)
                        }
                    });
                    E.searchStoreCode = null
                }
            },
            getRestaurantListFromNet: function(D) {
                var self = this;
                if ("" == D) {
                    Util.showInstantMessage({
                        content: Constant.app_home.insMsg_search
                    });
                    return
                }
                $(".sec-input input").attr("readonly", "readonly");
                $(".sec-input input").blur();
                setTimeout(function() {
                    $(".sec-input input").removeAttr("readonly")
                }, 500);
                self.clearBeforeData();
                Util.searchKey = D;
                Util.Busy.start();
                var E = {
                    "cityId": self.cityCode,
                    "keyword": D,
                    "page": self.pageNo+"",
                    "limit":Config.storeLoadPerPage+""
                };
                Model.Store.loadRestaurantListsByKeyword({key: JSON.stringify(E)}, function(H) {
                    self.searChCallBack(H, true)
                })
                Util.Busy.stop();
            },
            searChCallBack: function(F, G) {
                var E = this;
                if (F.status == "0") {
                    //E.attr('showClearInput',true);
                    E.pageNo = 1;
                    if (G) {
                        E.eachSearchRecordItems()
                    }
                    E.dataList = F.data;
                    E.initShopList(E.dataList);
                    Util.Busy.stop();
                } else {
                    if (G) {
                        E.eachSearchRecordItems()
                    }
                    $('#hos-box-js').css("display", "block");
                    E.dataList.splice(0);
                    E.initShopList(E.dataList);
                    Util.Busy.stop();
                    return
                }
            },
            clearBeforeData: function() {
                var D = this;
                D.attr("showItemList").splice(0);
                if (D.pullUpEl) {
                    D.pullUpEl.css("display", "none")
                }
                if (D.$TimeSelect) {
                    D.$TimeSelect.css("display", "none")
                }
                if (D.$Message) {
                    D.$Message.css("display", "none")
                }
            },
            initShopList: function(rec) {
                var self = this;
                var param = rec;
                self.param = self.param.concat(param);
                if (!isNaN(param.length) && param.length > 0) {
                    $('#rest-on-js').show();
                    $('#hos-box-js').hide();
                    self.attr("showItemList",self.param);
                }else{
                    $('#rest-un-js').show();
                }
                 Util.Busy.stop();
                 //当数据加载时，初始化滚动列表框
                 self.myScroll.refresh(0);
                 Util.lazyLoad.lazy({time_out: 1000});
                 if (self.showItemList && self.showItemList.length == 1) {
                    self.$RestaurantList.find("li").eq(0).trigger("tap");
                 }
            },
            searchByKey: function() {
                var searchKey = $("#searchKey").val();
                this.getRestaurantListFromNet(searchKey);
                return false
            },
            closeSearch: function () {
                Util.Busy.start();
                Util.Route.route(this, {page: "store", func: "list"});
            },
            clearSearch:function(){
                var self = this;
                // 清空搜索栏
                $("#searchKey").val("");
                // 清空搜索结果
                //self.attr("showItemList",[]);
                self.attr("showClearInput",false);
                $('#rest-on-js').hide();
                $('#rest-un-js').hide();
                var searchRecord =  self.getSearchRecordFromLoacl() || [];
                if(searchRecord.length > 0){
                    $("#hos-box-js").show();
                }
            }
        },
        events: {
            inserted: function() {},
            ".back tap": function(D, E) {
                var F = this.scope;
                Util.Route.route(F, {
                    page: "store",
                    func: "list"
                })
            },
            "#searchKey input": function (element, event) {
                var self = this.scope;
                $("#hos-box-js").hide();
                $(".carte-box").hide();
                $("#rest-un-js").hide();
                $(".search-lading-area").show();
                var currentSearchKey = $.trim($(element).val());
                if (currentSearchKey === "") {
                    self.attr("showClearInput",false);
                    if (self.getSearchRecordFromLoacl())
                        $("#hos-box-js").show();
                }else{
                   self.attr("showClearInput",true);
                }
            },
            ".rest-li-js .box tap": function(element, event) {
                var self = this.viewModel,
                    ele = $(element),
                    model = can.data(ele.parent(), "storeInfo");
                Util.saveCurrentStore(model);
                Util.Route.route(self, {page: "store", func: "info"});
                return false;
            },
            "#recordkey tap": function(E, F) {
                var G = this.scope;
                var H = E;
                var D = H.attr("recordkey");
                $(".sec-input input").val(D);
                G.getRestaurantListFromNet(D)
            },
            "#clear tap": function(D, E) {
                var F = this.scope;
                F.removeSearchRecordFromLoacl();
                F.attr("searchRecord").splice(0);
            }
        }
    })
});
