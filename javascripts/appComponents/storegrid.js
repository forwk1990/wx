/**
 * Created by itachi on 16/4/26.
 */
define(["util", "model", "banner"], function (util, model, banner) {
    return can.Component.extend({
        tag: "storegrid",
        template: can.view(util.getView("storegrid.mustache")),
        viewModel: {
            selectedStore: null,
            storeMenuList: null,
            purchaseTotalNum: 0,
            purchaseTotalPrice: 0,
            purchaseOriginalPrice:0,
            cartTemplate: null,
            cartData: {},
            menuTypeList: null,
            showCartBar: can.compute(function () {
                return this.attr("purchaseTotalNum") > 0;
            }),
            isModify: can.compute(true),
            isTotalDiscount:can.compute(function () {
                return this.attr("purchaseTotalPrice") != this.attr("purchaseOriginalPrice")
            }),
            totalNumForShow: can.compute(function () {
                var purchaseTotalNum = this.attr("purchaseTotalNum");
                return purchaseTotalNum ? (purchaseTotalNum > 99 ? "N" : purchaseTotalNum) : ""
            }),
            totalPriceForShow: can.compute(function () {
                var purchaseTotalPrice = this.attr("purchaseTotalPrice");
                if (purchaseTotalPrice) {
                    purchaseTotalPrice = parseFloat(purchaseTotalPrice);
                    if (purchaseTotalPrice < 0) {
                        purchaseTotalPrice = 0
                    }
                }
                return purchaseTotalPrice.toFixed(2)
            }),
            init: function () {
                var self = this;
                self.attr("wapper", Config.wapcontext);
                self.attr("selectedStore", {"storename": "餐厅加载中..."});
                self.loadStoreMenu({}, function (returnObject) {
                    self.initStoreMenu(returnObject);
                });
            },
            loadStoreMenu: function (store, success) {
                var self = this, orderInfo = util.getOrderInfo();

                // 根据商家cloudID获取该商家的所有菜品信息
                model.Store.getAllMenu({key: JSON.stringify({"cloudId": orderInfo.cloudId})}, function (returnObject) {
                    util.setSessionItem("store.menu.list", returnObject);
                    success(returnObject);
                });

                // 根据商家cloudID获取商家名称，获取失败时默认设置为美食快点平台
                model.Store.getRestaurantName({key: JSON.stringify({"cloudId": orderInfo.cloudId})}, function (returnObject) {
                    if (returnObject.length === 1) {
                        orderInfo.cloudName = returnObject[0].restaurantName;
                        orderInfo.imgPath = returnObject[0].imgPath;
                        self.attr("selectedStore", {"storename": orderInfo.cloudName});
                        util.saveOrderInfo(orderInfo);
                    } else {
                        self.attr("selectedStore", {"storename": "美食快点平台"});
                    }
                }, function () {
                    self.attr("selectedStore", {"storename": "美食快点平台"});
                });
            },
            convertServerModelToPrettyModel: function (serverModel) {
                var isLeaf = serverModel.foodChoice.length == 0;
                serverModel.imgPath = serverModel.foodImage;
                serverModel.isCanBuyByTime = isLeaf;
                serverModel.price = serverModel.presentPrice;
                serverModel.originalPrice = serverModel.foodPrice;// 原价
                serverModel.isDiscount = serverModel.originalPrice != serverModel.price;
                serverModel.activeFlag = serverModel.price > 0;// 是否可以点菜
                var intPrice = parseInt(serverModel.price);
                if (serverModel.price > intPrice) {
                    serverModel.bigPrice = intPrice;
                    serverModel.smallPrice = new String(serverModel.price - intPrice).substring(2);
                } else {
                    serverModel.bigPrice = intPrice;
                    serverModel.smallPrice = 0;
                }
                serverModel.midImgPath = serverModel.midImgPath ? serverModel.midImgPath : serverModel.bigImgPath;
                serverModel.name = serverModel.foodName;
                serverModel.quantity = 0;
                serverModel.systemId = serverModel.id;
                serverModel.topType = serverModel.foodtype;
                serverModel.iMaxQty = 99;
                serverModel.isExpandedChildMenu = true;
                serverModel.isSetMeal = !isLeaf;
                if (false == isLeaf) {
                    can.each(serverModel.foodChoice, function (childFoodObject, j) {
                        childFoodObject.firstLevelIndex = serverModel.firstLevelIndex;
                        childFoodObject.secondLevelIndex = serverModel.secondLevelIndex;
                        childFoodObject.thirdLevelIndex = j;
                        childFoodObject.quantity = childFoodObject.choiceNum;
                        childFoodObject.systemId = childFoodObject.id;
                        childFoodObject.name = childFoodObject.choiceName;
                        childFoodObject.price = childFoodObject.presentPrice;
                        childFoodObject.originalPrice = childFoodObject.choicePrice;// 原价
                        childFoodObject.isDiscount = childFoodObject.price != childFoodObject.originalPrice;
                        childFoodObject.activeFlag = 1;
                        childFoodObject.iMaxQty = 99;
                        childFoodObject.topType = serverModel.topType;
                        childFoodObject.parent = serverModel;
                    });
                }
                return serverModel;
            },
            initStoreMenu: function (storeMenu) {
                var self = this;
                var typeArray = [];
                can.each(storeMenu, function (value, index0) {
                    var topClassObject = value;
                    var isHighlight = topClassObject.topClassHighLightFlag == 1;
                    topClassObject.purchaseCount = 0;
                    topClassObject.showCount = can.compute(function () {
                        var purchaseCount = topClassObject.purchaseCount;
                        return purchaseCount > 99 ? "N" : purchaseCount
                    });
                    can.each(value.foodInfo, function (foodObject, index) {
                        var flag = index % 2 === 0;
                        foodObject.className = flag ? "even" : "odd";
                        foodObject.isHideMarginBottom = false;
                        foodObject.firstLevelIndex = index0;
                        foodObject.secondLevelIndex = index;
                        if (index0 != storeMenu.length - 1) {
                            if (index == value.foodInfo.length - 1) {
                                foodObject.isHideMarginBottom = true;
                            }
                            if (index == value.foodInfo.length - 2 && flag) {
                                foodObject.isHideMarginBottom = true;
                            }
                        }
                        self.convertServerModelToPrettyModel(foodObject);
                    });
                    if (value.foodInfo.length > 0) {
                        typeArray.push({
                            "topType": value.foodInfo[0].topType,
                            "title": value.sectionTitle
                        });
                    }
                    self.attr("menuTypeList", typeArray);
                    topClassObject.activeFlag = isHighlight;
                    topClassObject.selected = (index0 == 0);
                    topClassObject.topType = value.foodInfo[0].topType;
                });
                self.attr("storeMenuList", storeMenu);
                self._render();
                self.refreshStoreMenuList();
            },
            _render: function () {
                $("#wrapper-main").height(window.innerHeight);
                if (this.showCartBar()) {
                    $("#wrapper-box-js").css("bottom", 50);
                } else {
                    $("#wrapper-box-js").css("bottom", 0);
                }
                var $menuList = $("#searchlist"),

                //$window = $(document.getElementsByTagName("storemenusearch")[0]),
                    $window = $(window),
                    holderElement = document.getElementById("holder"),
                    $titleElementArray = $menuList.find("li.category-title-new"),
                    $leftMenuArray = $(".left-menu>li"),
                    Q = null,
                    L = 0,
                    S = 0;
                //$menuList.css("height",window.innerHeight - 52);
                $(".category")[0].innerText = $titleElementArray.eq(0).text();
                $("#wrapper-box-js").scroll(function () {
                    console.info("wrapper-box-js开始滚动");
                });
                $window.on("scroll", function (X) {
                    console.info("$window" + $window.scrollTop());
                    if ($(".category").length <= 0) return false;
                    var containerScrollTop = $window.scrollTop();
                    for (var index = 0; index < $titleElementArray.length; index++) {
                        var currentTitleElement = $titleElementArray[index];
                        console.info("currentTitleElement.offsetTop:" + index + "->" + $(currentTitleElement).position().top);
                        S = containerScrollTop - $(currentTitleElement).position().top;
                        if (index == $titleElementArray.length - 1) {// 最后一个元素了
                            if (S >= 0) {
                                L = index;
                                if (S > holderElement.clientHeight) {
                                    S = 0;
                                    $(".category")[0].innerText = currentTitleElement.innerText;
                                }
                            }
                            break;
                        }
                        var nextTitleElement = $titleElementArray[index + 1];
                        var Y = containerScrollTop - $(nextTitleElement).position().top;
                        if (S >= 0 && Y < 0) {// 大于当前滚动小于下一个滚动
                            L = index;
                            if (S >= 0) {
                                S = 0;
                                $(".category")[0].innerText = currentTitleElement.innerText;
                            }
                            break;
                        }
                    }
                    Q = setTimeout(function () {
                        clearTimeout(Q);
                        // util.lazyLoad.lazy({time_out: 1000,animate:"fadeIn"});
                        util.lazyLoad.lazy({time_out: 1000});
                    }, 100);
                });

                // util.lazyLoad.lazy({time_out: 1000,animate:"fadeIn"});
                util.lazyLoad.lazy({time_out: 1000});
                var G = $('<div id="pointDivs">').appendTo("#pagecontent");
                for (var I = 0; I < 5; I++) {
                    $('<div class="point-outer point-pre"><div class="point-inner"/></div>').appendTo(G);
                }
                util.Busy.stop();
            },
            _addProductNum: function (model) {
                if (!model.activeFlag) {
                    util.showInstantMessage({content: "该产品目前无法订购，请谅解"});
                    return;
                }
                var quantity = model.quantity;
                var maxQuantity = parseInt(model.iMaxQty);
                if (quantity >= maxQuantity) {
                    util.showInstantMessage({content: "该产品最多可订购" + maxQuantity + "份"});
                    return;
                }
                this._cartAnimate();
                model.attr("quantity", quantity + 1);
                if (model["parent"]) {
                    var totalQuantity = model.parent.attr("quantity") + 1;
                    model.parent.attr("quantity", totalQuantity);
                }
                this.updateLocalCartInfo(model, true)
            },
            _minusProductNum: function (model) {
                if (!model.activeFlag) {
                    util.showInstantMessage({content: "该产品目前无法订购，请谅解"});
                    return
                }
                var quantity = model.quantity - 1;
                model.attr("quantity", quantity < 0 ? 0 : quantity);
                if (model["parent"]) {
                    var totalQuantity = model.parent.attr("quantity") - 1;
                    model.parent.attr("quantity", totalQuantity < 0 ? 0 : totalQuantity);
                }
                this.updateLocalCartInfo(model, false);
            },
            _cartAnimate: function () {
                setTimeout(function () {
                    // 购物篮动画效果
                    $("#cart-animate").animate("zoomInout", 200);
                }, 1);
            },
            getInfoInOrder: function (foodObject, orderItems) {
                var info = false;
                $.each(orderItems, function (J, orderItem) {
                    if (orderItem.systemId == foodObject.systemId) {
                        info = orderItem;
                        return false
                    }
                });
                return info;
            },
            updateLocalCartInfo: function (model, isAdd) {
                this.isModify(true);
                var purchaseTotalNum = this.purchaseTotalNum;
                var operatedPurchaseTotalNum = isAdd ? purchaseTotalNum + 1 : purchaseTotalNum - 1;
                this.attr("purchaseTotalNum", operatedPurchaseTotalNum);
                var purchaseTotalPrice = this.purchaseTotalPrice;
                var purchaseOriginalTotalPrice = this.purchaseOriginalPrice;

                var operatedPurchaseTotalNum = isAdd ? (purchaseTotalPrice * 100) + (model.price * 100) : (purchaseTotalPrice * 100) - (model.price * 100);
                operatedPurchaseTotalNum = operatedPurchaseTotalNum / 100;
                this.attr("purchaseTotalPrice", operatedPurchaseTotalNum);

                var operatedOriginalTotalNum = isAdd ? (purchaseOriginalTotalPrice * 100) + (model.originalPrice * 100) : (purchaseOriginalTotalPrice * 100) - (model.originalPrice * 100);
                operatedOriginalTotalNum = operatedOriginalTotalNum / 100;
                this.attr("purchaseOriginalPrice", operatedOriginalTotalNum);
            },
            _renderCart: function () {
                var I = util.getOrderInfo();
                var F = I.items;
                var J = I.promotions;
                var G = util.calculateSum();
                this.attr("purchaseTotalNum", G.quantity);
                this.attr("purchaseTotalPrice", G.price);
                this.attr("purchaseOriginalPrice", G.originalPrice);
                var H = this;
                if (F && F.length > 0) {
                    H.cartData.attr("orderedItems", F);
                    H.cartData.attr("promotions", J);
                    util.Busy.stop()
                } else {
                    $("#cart-box").hide();
                    $("#cart-box").remove();
                    this.cartTemplate = null;
                    util.Busy.stop()
                }
            },
            refreshStoreMenuList: function () {
                var self = this;
                var orderInfo = util.getOrderInfo();
                var renderedOrderArray = new Array();
                if (orderInfo.items && orderInfo.items.length > 0) {
                    can.each(this.attr("storeMenuList"), function (value, N) {
                        var topClassObject = value;
                        var totalNumber = 0;
                        can.each(value.attr("foodInfo"), function (foodObject, Q) {
                            if (!foodObject.activeFlag && foodObject.foodGroupStatus != 1) {
                                return;
                            }
                            if (foodObject.foodGroupStatus != 1) {
                                var foodInfo = self.getInfoInOrder(foodObject, orderInfo.items);
                                if (foodInfo && $.inArray(foodInfo.systemId, renderedOrderArray) < 0) {
                                    foodObject.attr("quantity", foodInfo.quantity);
                                    renderedOrderArray.push(foodInfo.systemId);
                                } else {
                                    foodObject.attr("quantity", 0)
                                }
                                totalNumber += foodObject.quantity;
                            } else {
                                $.each(foodObject.foodChoice, function (index, childFoodObject) {
                                    var childFoodInfo = self.getInfoInOrder(childFoodObject, orderInfo.items);
                                    if (childFoodInfo && $.inArray(childFoodInfo.systemId, renderedOrderArray) < 0) {
                                        childFoodObject.attr("quantity", childFoodInfo.quantity);
                                        //foodObject.attr("isExpandedChildMenu", true);
                                        renderedOrderArray.push(childFoodInfo.systemId)
                                    } else {
                                        childFoodObject.attr("quantity", 0);
                                    }
                                    totalNumber += childFoodObject.quantity;
                                });

                            }
                        });
                        topClassObject.attr("purchaseCount", totalNumber);
                    })
                } else {
                    can.each(this.attr("storeMenuList"), function (value, N) {
                        can.each(value.attr("foodInfo"), function (foodObject, P) {
                            foodObject.attr("quantity", 0);
                            if (foodObject.foodGroupStatus == 1) {
                                //foodObject.attr("isExpandedChildMenu", false);
                                $.each(foodObject.foodChoice, function (index, childFoodObject) {
                                    childFoodObject.attr("quantity", 0);
                                });
                            }
                        });
                        value.attr("purchaseCount", 0);
                    })
                }
                var F = util.calculateSum();
                this.attr("purchaseTotalNum", F.quantity);
                this.attr("purchaseTotalPrice", F.price);
                this.attr("purchaseOriginalPrice", F.originalPrice);
            },
            triggerCart: function () {
                if ($("#cart-box").length > 0 && "block" == $("#cart-box").css("display")) {
                    $("#cart-box").hide();
                    $("#cart-box").remove();
                    this.cartTemplate = null;
                    return false
                }
                var self = this;
                if (!self.cartTemplate) {
                    self.cartTemplate = can.view(util.getView("storeMenu.cartInfo.mustache"), self.cartData);
                    $("#wrapper-main").append(self.cartTemplate);
                }
                var F = null;
                $("#cart-box").show();
                $("#cart-box").css({
                    "position": "absolute",
                    "top": 0,
                    "bottom": 0,
                    "width": "100%"
                }).on("touchstart", function (event) {
                    F = event.touches[0].clientY
                }).on("touchmove", function (event) {
                    var I = event.target.className;
                    console.info("class name is " + I);
                    if (I == "layer-box01") {
                        event.preventDefault();
                        return false
                    }
                    if (event.touches[0].clientY < F) {
                        if ($(".ow-y").scrollTop() >= $(".ow-y")[0].scrollHeight - $(".ow-y").height()) {
                            event.preventDefault();
                            return false
                        }
                    } else {
                        if ($(".ow-y").scrollTop() == 0) {
                            event.preventDefault();
                            return false
                        }
                    }
                });

                util.Busy.start();
                if (self.isModify()) {
                    var selectedFoodItems = self.genSyncOrderItems();
                    var orderObject = util.getOrderInfo();
                    orderObject.items = selectedFoodItems;
                    util.saveOrderInfo(orderObject);
                    self.isModify(false);
                    util.removeLocalTempOrders();
                }
                self._renderCart();
                return false
            },
            modifyStoreMenuList: function (orderItemModel, isAdd) {
                var modifyFlag = false;
                var self = this;
                var matchedElements = can.$("li[systemId='" + orderItemModel.systemId + "']");
                if (matchedElements.length > 0) {
                    for (var index = 0; index < matchedElements.length; index++) {
                        var currentElementViewModel = can.data(can.$("li[systemId='" + orderItemModel.systemId + "']").eq(index), "menuVo");
                        if (currentElementViewModel.quantity) {
                            var quantity = currentElementViewModel.attr("quantity");
                            quantity = isAdd ? quantity + 1 : quantity - 1;
                            currentElementViewModel.attr("quantity", quantity);
                            //self.updateItemTopClass(currentElementViewModel, isAdd);
                            modifyFlag = true;
                            break
                        }
                    }
                }
                if (orderItemModel.mealFlag) {
                    var menuListArray = self.attr("storeMenuList");
                    var foodObject = menuListArray[orderItemModel.firstLevelIndex].foodInfo[orderItemModel.secondLevelIndex];
                    var quantity = foodObject.attr("quantity");
                    quantity = isAdd ? quantity + 1 : quantity - 1;
                    foodObject.attr("quantity", quantity);

                    var choiceQuantity = foodObject.foodChoice[orderItemModel.thirdLevelIndex].attr("quantity");
                    choiceQuantity = isAdd ? choiceQuantity + 1 : choiceQuantity - 1;
                    foodObject.foodChoice[orderItemModel.thirdLevelIndex].attr("quantity", choiceQuantity);
                }
                if (!modifyFlag) {
                    console.info("没有找到对应可用的菜单项");
                }
            },
            updateCartOrderItem: function (orderItemModel, isAdd) {
                var self = this;
                var orderInfo = util.getOrderInfo();
                $.each(orderInfo.items, function (index, foodObject) {
                    if (foodObject.systemId === orderItemModel.systemId) {
                        if (!isAdd && orderItemModel.quantity === 0) {
                            orderInfo.items = orderInfo.items.slice(0, index).concat(orderInfo.items.slice(index + 1));
                        } else {
                            foodObject.quantity = orderItemModel.quantity;
                        }
                        return false;
                    }
                });
                self.modifyStoreMenuList(orderItemModel, isAdd);
                self._renderCart();
            },
            refreshStoreMenuList: function () {
                var self = this;
                var orderInfo = util.getOrderInfo();

                var renderedOrderArray = new Array();
                if (orderInfo.items && orderInfo.items.length > 0) {
                    can.each(this.attr("storeMenuList"), function (value, N) {
                        var topClassObject = value;
                        var totalNumber = 0;
                        can.each(value.attr("foodInfo"), function (foodObject, Q) {
                            var foodChildTotalNumber = 0;
                            if (!foodObject.activeFlag && foodObject.foodGroupStatus != 1) {
                                return;
                            }
                            if (foodObject.foodGroupStatus != 1) {
                                var foodInfo = self.getInfoInOrder(foodObject, orderInfo.items);
                                if (foodInfo && $.inArray(foodInfo.systemId, renderedOrderArray) < 0) {
                                    foodObject.attr("quantity", foodInfo.quantity);
                                    renderedOrderArray.push(foodInfo.systemId);
                                } else {
                                    foodObject.attr("quantity", 0)
                                }
                                totalNumber += foodObject.quantity;
                            } else {
                                $.each(foodObject.foodChoice, function (index, childFoodObject) {
                                    var childFoodInfo = self.getInfoInOrder(childFoodObject, orderInfo.items);
                                    if (childFoodInfo && $.inArray(childFoodInfo.systemId, renderedOrderArray) < 0) {
                                        childFoodObject.attr("quantity", childFoodInfo.quantity);
                                        foodObject.attr("isExpandedChildMenu", true);
                                        renderedOrderArray.push(childFoodInfo.systemId)
                                    } else {
                                        childFoodObject.attr("quantity", 0);
                                    }
                                    foodChildTotalNumber += childFoodObject.quantity;
                                    totalNumber += childFoodObject.quantity;
                                });
                                foodObject.attr("quantity", foodChildTotalNumber);
                            }
                        });
                        topClassObject.attr("purchaseCount", totalNumber);
                    })
                } else {
                    can.each(this.attr("storeMenuList"), function (value, N) {
                        can.each(value.attr("foodInfo"), function (foodObject, P) {
                            foodObject.attr("quantity", 0);
                            if (foodObject.foodGroupStatus == 1) {
                                foodObject.attr("isExpandedChildMenu", false);
                                $.each(foodObject.foodChoice, function (index, childFoodObject) {
                                    childFoodObject.attr("quantity", 0);
                                });
                                foodObject.attr("quantity", 0);
                            }
                        });
                        value.attr("purchaseCount", 0);
                    })
                }
                var F = util.calculateSum();
                this.attr("purchaseTotalNum", F.quantity);
                this.attr("purchaseTotalPrice", F.price);
            },
            genSyncOrderItems: function () {
                var orderInfo = util.getOrderInfo();
                var orderItemsArray = new Array();
                var self = this;
                var cartFoodArray = {};
                can.each(self.attr("storeMenuList"), function (menuValue, K) {
                    can.each(menuValue.attr("foodInfo"), function (cartFoodObject, N) {
                        if (cartFoodObject.isSetMeal) {
                            can.each(cartFoodObject.foodChoice, function (childFoodObject, j) {
                                var childquantity = childFoodObject.attr("quantity");
                                if (childquantity) {
                                    cartFoodArray[childFoodObject.systemId] = {
                                        mealFlag: true,
                                        systemId: childFoodObject.systemId,
                                        price: childFoodObject.price,
                                        originalPrice:childFoodObject.originalPrice,
                                        isDiscount: childFoodObject.originalPrice != childFoodObject.price,
                                        quantity: childquantity,
                                        modify: false,
                                        nameCN: childFoodObject.name,
                                        id: undefined,
                                        firstLevelIndex: cartFoodObject.firstLevelIndex,
                                        secondLevelIndex: cartFoodObject.secondLevelIndex,
                                        thirdLevelIndex: j
                                    };
                                }
                            });
                        } else {
                            var quantity = cartFoodObject.attr("quantity");
                            if (quantity) {
                                cartFoodArray[cartFoodObject.systemId] = {
                                    mealFlag: false,
                                    systemId: cartFoodObject.systemId,
                                    price: cartFoodObject.price,
                                    originalPrice:cartFoodObject.originalPrice,
                                    isDiscount: cartFoodObject.originalPrice != cartFoodObject.price,
                                    quantity: quantity,
                                    modify: false,
                                    nameCN: cartFoodObject.foodName,
                                    id: undefined
                                };
                            }
                        }
                    })
                });
                if (orderInfo && orderInfo.items && orderInfo.items.length > 0) {
                    can.each(orderInfo.items, function (cartFoodObject) {
                        var K = cartFoodObject.promotionType != 0;
                        if (!K) {
                            if (cartFoodArray[cartFoodObject.systemId]) {
                                var J = cartFoodArray[cartFoodObject.systemId];
                                if (J.quantity == cartFoodObject.quantity) {
                                    delete cartFoodArray[cartFoodObject.systemId]
                                } else {
                                    J.modify = true;
                                    J.id = cartFoodObject.id
                                }
                            } else {
                                cartFoodArray[cartFoodObject.systemId] = {
                                    mealFlag: cartFoodObject.mealFlag,
                                    systemId: cartFoodObject.systemId,
                                    price: cartFoodObject.price,
                                    quantity: 0,
                                    modify: true,
                                    nameCN: cartFoodObject.nameCN,
                                    id: cartFoodObject.id
                                }
                            }
                        }
                    })
                }
                $.each(cartFoodArray, function (K, J) {
                    orderItemsArray.push(J)
                });
                return orderItemsArray
            },
            settlement: function (H, G, I) {
                var self = this;
                util.Busy.start();
                if (this.isModify()) {
                    var selectedFoodItems = self.genSyncOrderItems();
                    var orderObject = util.getOrderInfo();
                    orderObject.items = selectedFoodItems;
                    util.saveOrderInfo(orderObject);
                    self.isModify(false);
                    util.removeLocalTempOrders();
                }
                window.clearInterval(window.adInterval);
                util.Route.route(this, {page: "order", func: "tallyup"});//tallyup
                I.preventDefault();
                return false
            },
            _popDetailWindow: function (element) {
                var model = can.data($(element).parent().parent(), "menuVo");
                var popWindowHtml = can.view(util.getView("storeMenu.popWindow.mustache"), model);
                can.$("#wrapper-main").append(popWindowHtml);
                var height = $(document).height();
                var width = $(document).width();
                $(".pr_lay").css("height", height - 40);
                $(".pr_lay").css("width", width - 40);
                $(".pr_lay").css("left", 20);
                $(".img-box").height(width - 40);
                $("#popContent").height(height - 70);
                $("#pic_cover").show();

                // 异步加载图片路径
                $("#pic_cover img").attr("src", $("#pic_cover img").attr("real_src")).removeAttr("real_src");

                var F = null;
                $("#pic_cover").on("touchstart", function (event) {
                    F = event.touches[0].clientY;
                    console.info("start->" + F);
                }).on("touchmove", function (event) {
                    var I = event.target.className;
                    console.info("move->" + I);
                    if (I == "layer-box02") {
                        event.preventDefault();
                        console.info("return false move->" + I);
                        return false
                    }
                    if (event.touches[0].clientY < F) {
                        if ($(".nostyle").scrollTop() >= $(".nostyle")[0].scrollHeight - $(".nostyle").height()) {
                            event.preventDefault();
                            console.info("return false move->" + I);
                            return false
                        }
                    } else {
                        if ($(".nostyle").scrollTop() == 0) {
                            event.preventDefault();
                            console.info("return false move->" + I);
                            return false
                        }
                    }
                });
            }
        },
        helpers: {
            isShowCartBar: function (H) {
                var G = this.attr("adShowFlag") ? 70 : 50, F = $("#wrapper-box-js");
                if (this.showCartBar()) {
                    $(".shopping-cart-layer").removeClass("hideCartBar").addClass("showCartBar");
                    F.css("bottom", 50);
                    $("#searchlist").css("height", $("#searchlist").height() + 50);
                    $(window).scrollTop($(window).scrollTop() + 50);
                } else {
                    $(".shopping-cart-layer").removeClass("showCartBar").addClass("hideCartBar");
                    F.css("bottom", 0);
                    $(window).scrollTop($(window).scrollTop() - 50);
                    $("#searchlist").css("height", $("#searchlist").height() - 50);
                }
                F.css("top", G);
            },
            showCountF: function (F) {
                var G = F;
                if (can.isFunction(F)) {
                    G = F()
                }
                return G > 99 ? "N" : G
            }
        },
        events: {
            // 菜品详情遮罩关闭
            "#layer-box02-js tap": function (G, H) {
                var F = H.gesture.target.id;
                if (F != "layer-box02-js") {
                    return false
                }
                $("#pic_cover").hide();
                $("#pic_cover").remove();
                return false;
            },
            // 菜品详情关闭
            "#pr-lay-close-js tap": function () {
                $("#pic_cover").hide();
                $("#pic_cover").remove();
                return false;
            },
            // 购物车中的加菜
            ".cartAdd tap": function (element, G) {
                var orderItemModel = can.data(can.$(element).parent().parent(), "orderItem");
                if (orderItemModel.quantity >= 99) {
                    util.showInstantMessage({content: "同一产品最多订99份。"});
                    return;
                }
                orderItemModel.quantity = orderItemModel.quantity + 1;
                this.scope.updateCartOrderItem(orderItemModel, true)
            },
            // 购物车中的减菜
            ".cartMinus tap": function (element) {
                var orderItemModel = can.data(can.$(element).parent().parent(), "orderItem");
                orderItemModel.quantity = orderItemModel.quantity - 1;
                orderItemModel.quantity = orderItemModel.quantity < 0 ? 0 : orderItemModel.quantity;
                this.scope.updateCartOrderItem(orderItemModel, false)
            },
            // 菜单加菜
            ".add-quantity tap": function (element) {
                var currentModel = can.data(can.$(element).parent().parent().parent().parent().parent(), "menuVo");
                if (!currentModel.isSetMeal) {
                    this.scope._addProductNum(currentModel);
                } else {
                    $("img[systemid='" + currentModel.systemId + "']").trigger("tap");
                }
            },
            // 菜单减菜
            ".minus-quantity tap": function (element) {
                var currentModel = can.data(can.$(element).parent().parent().parent().parent().parent(), "menuVo");
                //this.scope._minusProductNum(currentModel);
                if (!currentModel.isSetMeal) {
                    this.scope._minusProductNum(currentModel);
                } else {
                    $("img[systemid='" + currentModel.systemId + "']").trigger("tap");
                }
            },
            // 弹出的菜品详情加菜
            ".popAdd tap": function (F, G) {
                var currentModel = can.data(can.$(F).parent().parent().parent(), "menuVo");
                this.scope._addProductNum(currentModel);
                return false
            },
            ".expandAdd tap": function (element) {
                var currentModel = can.data(can.$(element).parent().parent(), "menuVo");
                this.scope._addProductNum(currentModel);
            },
            // 菜单详细子级减菜
            ".expandMinus tap": function (element, event) {
                var currentModel = can.data(can.$(element).parent().parent(), "menuVo");
                this.scope._minusProductNum(currentModel);
            },
            // 弹出的菜品详情减菜
            ".popMinus tap": function (F, G) {
                var currentModel = can.data(can.$(F).parent().parent().parent(), "menuVo");
                this.scope._minusProductNum(currentModel);
                return false
            },
            // 触碰购物车外部遮罩隐藏购物车
            "#layer-box01-js tap": function () {
                $("#cart-box").hide();
                $("#cart-box").remove();
                this.scope.cartTemplate = null;
                return false;
            },
            // 分类菜单遮罩点击关闭
            "#layer-catetory-menu-js tap": function () {
                $(".type-category-div").hide();
                return false;
            },
            // 分类按钮点击显示菜单遮罩
            ".category-menu tap": function () {
                $(".type-category-div").show();

                var startTouchClientY = null;
                $(".type-category-div").on("touchstart", function (event) {
                    startTouchClientY = event.touches[0].clientY;
                }).on("touchmove", function (event) {
                    var I = event.target.className;
                    console.info("class name is " + I);
                    //alert(I);
                    if (I == "layer-box01") {
                        event.preventDefault();
                        return false
                    }
                    var info = "scrollTop : " + $(".type-category-menu-div").scrollTop()
                        + "\r\nscrollHeight : " + $(".type-category-menu-div")[0].scrollHeight
                        + "\r\nheight : " + $(".type-category-menu-div").height()
                        + "\r\nclientY : " + event.touches[0].clientY
                        + "\r\startTouchClientY : " + startTouchClientY;
                    //alert(info);
                    if (event.touches[0].clientY < startTouchClientY) {
                        // 向上滚动
                        if ($(".type-category-menu-div").scrollTop()
                            >= $(".type-category-menu-div")[0].scrollHeight - $(".type-category-menu-div").height()) {
                            event.preventDefault();
                            return false
                        }
                    } else {//向下滚动
                        if ($(".type-category-menu-div").scrollTop() == 0) {
                            event.preventDefault();
                            return false
                        }
                    }
                });
                return false;
            },

            ".type-category-menu-li tap": function (element) {
                var currentModel = can.data(can.$(element), "typeVo");
                var $CategoryTitleElement = $("#searchlist>li.category-title-new").filter("li[topType='" + currentModel.topType + "']");
                //$(window).scrollTop($CategoryTitleElement[0].offsetTop);
                window.scrollTo(0, $CategoryTitleElement[0].offsetTop);
                $(".category")[0].innerText = currentModel.title;
                $(".type-category-div").hide();
                return false;
            },
            // 点击关闭分类菜单
            ".type-category-close tap": function () {
                $(".type-category-div").hide();
                return false;
            },
            // 清空购物车
            "#emptyCart tap": function () {
                var self = this;
                util.confirm({description: "确认清空购物车？"}, function () {
                    util.Busy.start();
                    var orderInfo = util.getOrderInfo();
                    orderInfo.items = [];
                    util.saveOrderInfo(orderInfo);
                    $("#cart-box").hide();
                    $("#cart-box").remove();
                    self.scope.cartTemplate = null;
                    self.scope.refreshStoreMenuList();
                    util.Busy.stop();
                })
            },
            // 搜索菜品
            ".header-search tap": function (element, event) {
                var self = this;
                if (self.scope.isModify()) {
                    var selectedFoodItems = self.scope.genSyncOrderItems();
                    var orderObject = util.getOrderInfo();
                    orderObject.items = selectedFoodItems;
                    util.saveOrderInfo(orderObject);
                    self.scope.isModify(false);
                    util.removeLocalTempOrders();
                }
                util.Route.route(self, {page: "storemenu", func: "search"});
                util.Busy.stop();
                return false;
            },
            // 弹出菜品详情
            ".square-pic-list-div tap": function (element) {
                this.scope._popDetailWindow(element);
            }
        }
    });
});