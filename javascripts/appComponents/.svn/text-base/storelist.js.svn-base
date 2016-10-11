define(['model','util','constant'],function(Model, Util, Constant) {
	return can.Component.extend({
		tag: "storelist",
		template: can.view(Util.getView("storelist")),
		scope: {
			cityName: null,
			list_map: "isList",
			longitude: 121.4000,
			//上海
			latitude: 31.2000,
			lng:null,
			lat:null,
			onTable: "all",
			//[all,nearby,old]
			selectedIndex: -1,
			pageNo: 1,
			dataList: null,
			//服务返回的原始数据集
			accPerPage: parseInt((window.innerHeight - $(".wrapper-head").height() - $(".rest-menu").height()) / 66) + 1,
			//根据屏幕大小来确定每页显示多少条记录
			showItemList: [],
			//排队桌台信息
			showTableInfo: [],
			//页面要显示的数据集
			init: function() {
				Util.Busy.start();
				this.attr("showItemList").splice(0); //清空显示的数据List
				var self = this;
				self.attr("wapcontext", Config.wapcontext);
				self.dataList = new Array();
				require(['utils/iscroll.min'],function(){
					if (window.pageChangeOption && window.pageChangeOption.storelist) {
						self.dataList = window.pageChangeOption.storelist;
						setTimeout(function() {
							self._render();
							self._pullDownAction();
							if (window._tag) { 
								_tag.dcsMultiTrack('wt.event', 'storeList', 'wt.msg', '餐厅列表页面加载');
							}
						},100);
					} else {
						setTimeout(function() {
							self._render();
							//选中餐厅模式，加载数据
							self.selectedPatternControl();
							if (window._tag) { 
								_tag.dcsMultiTrack('wt.event', 'storeList', 'wt.msg', '餐厅列表页面加载');
							}
						},100);
					}
				});
			},
			_render: function() {
				var self = this;
				self.pullUpEl = $('#pullUp');
				self.pullUpOffset = 51;
				// 提示消息
				self.$Message = $(".no-rest");
				self.$Message_nearby = $('<div class="no-rest" id="no-rest-js" >' + '<p>抱歉，附近没有餐厅</p>' + '<p>请搜索关键词试试吧!</p>' + '</div>'); //style="display: none;"
				self.$Message_all = $('<div class="no-rest" id="no-rest-js" >' + '<p>抱歉，没有找到餐厅</p>' + '<p>请搜索关键词试试吧!</p>' + '</div>');
				self.$Message_old = $('<div class="no-rest" id="no-rest-js" >' + '<p>抱歉，没有我去过的餐厅</p>' + '<p>请搜索关键词试试吧!</p>' + '</div>');
				self.$tip_append = $(".rest-list");
				// 餐厅列表
				self.$RestaurantList = $("#restaurant_list");
				// 当前点击item的index
				self._$TimeSelectcurr = 0;
				// 时间选择下拉项
				self.$TimeSelect = self.$RestaurantList.find("#time_select").remove();
				//初始化滚动列表框
				self.initScroll();
			},
			initScroll: function() {
				var self = this;
				$("#rest-box").height(window.innerHeight - $(".wrapper-head").height() - $(".rest-menu").height());
				var wrapper = document.getElementById('rest-box');

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
				if(this.onTable && tap && this.onTable == tap){
					if(this.onTable == "all"){
						this._syLoadMoreStores();
					}else if(this.onTable == "old"){
						this._syLoadQueueStores();
					}else{
						this.initShopList(this.dataList,tap);
					}
				}
			},
			_syLoadMoreStores:function(){
				var self = this;
				var condition = {
						"cityId": Util.getCurrCity().citycode+"",
						"page": self.pageNo+"",
						"limit":Config.storeLoadPerPage+""
				};
				if(self.lng && self.lat){
					$.extend(condition,{"mylng":self.lng,"mylat":self.lat});
				}
				Model.Store.loadRestaurantLists({key: JSON.stringify(condition)}, function(scret) {
					if(self.onTable && self.onTable!="all"){
						return;
					}
					// 返回结果成功
					if (scret.status == "0") {
						//Util.sysTime = scret.syncTime;
						// 初始化列表
						var param = scret.data;
						self.param = self.param.concat(param);
						//$.merge(self.param,param);
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
			_syLoadQueueStores:function(){
				var self = this;
				var orderInfo = Util.getOrderInfo();
				var condition = {
					"wxOpenId": orderInfo.openId+"",
					"page": self.pageNo+"",
					"limit":Config.storeLoadPerPage+""
				};
				Model.Store.loadQueuedRestaurantLists({key: JSON.stringify(condition)}, function(scret) {
					if(self.onTable && self.onTable!="old"){
						return;
					}
					// 返回结果成功
					if (scret.status == "0") {
						//Util.sysTime = scret.syncTime;
						// 初始化列表
						var param = scret.data;
						self.param = self.param.concat(param);
						//$.merge(self.param,param);
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
			//滚动元素
			_scrollRefresh: function(_index) {
				var self = this;
				//显示数据列表高度
				var liheight = $(".rest-list").height();
				//屏幕可滚动高度
				var scrollHeight = $("#rest-box").height();
				if (liheight > scrollHeight) {
					//初始化滚动列表框
					self.myScroll.refresh(0);
					//在指定的时间内滚动到指定的元素
					if (_index == 0) {
						self.myScroll.scrollToElement("#restaurant_list li:first-child", 400);
					} else {
						self.myScroll.scrollToElement("#restaurant_list li:nth-child(" + _index + ")", 400);
					}
				}

			},
			//获取所有的餐厅【全部餐厅】
			getAllResturants: function() {
				var self = this;
				$("#rest-menu01-js").removeClass("on");
				$("#rest-menu02-js").addClass("on");
				$("#rest-menu03-js").removeClass("on");
				$(".rest-menu ul li span").addClass("on");
				$('.pull-box').css("display", "block");
				self.onTable = "all";
				self.clearBeforeData();
				// 消息等待--超时1分钟
				Util.Busy.start({
					//"caption" : Constant.app_search.loadingdata,
					"timeout": "60000"
				});
				// 获取餐厅数据：根据餐厅代码，调用服务器获取数据
				var condition = {
					"cityId": Util.getCurrCity().citycode,
					"page":'1',
					"limit":Config.storeLoadPerPage+""
				};
				Model.Store.loadRestaurantLists({key: JSON.stringify(condition)}, function(scret) {
					// 返回结果成功
					if (scret.status == "0") {
						//Util.sysTime = scret.syncTime;
						self.pageNo = 1;
						// 初始化列表
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
			// 获取附近餐厅数据：附近肯德基，根据GPS调用服务器，获取餐厅数据【附近】
			getRestaurantListNearby: function(context, el, ev) {
				var self = this;
				$("#rest-menu01-js").addClass("on");
				$("#rest-menu02-js").removeClass("on");
				$("#rest-menu03-js").removeClass("on");
				$(".rest-menu ul li span").removeClass("on");
				self.onTable = "nearby";
				self.clearBeforeData();
				// 消息等待
				Util.Busy.start({
					//"caption" : "正在搜索附近的肯德基餐厅,请稍候...",
					"timeout": "60000"
				});
				Util.geolocation(function(position){
					if(position){
						self.longitude = position.lng;
						self.latitude = position.lat;
						self.lng = position.lng;
						self.lat = position.lat;
						Model.Store.getRestaurantNearby({
							nearbySearchKey:{lng: self.lng ,lat: self.lat}
						},function(scret) {
							// 返回结果成功
							if (scret.status == "ok") {
								Util.storeList = scret.data;
								Util.sysTime = scret.syncTime;
								self.pageNo = 1;
								// 初始化列表
								self.dataList = scret.data.store;
								self.initShopList(self.dataList,"nearby");
							} else {
								//异常时，清空数据，显示提示信息
								self.dataList.splice(0);
								self.initShopList(self.dataList,"nearby");
							}
						});
					} else {
						//异常时，清空数据，显示提示信息
						self.dataList.splice(0);
						self.initShopList(self.dataList,"nearby");
					}
				});
			},
			// 根据本地信息，调用服务，获取餐厅数据【我去过的】
			getRestaurantListFromLoc: function(context, el, ev) {
				var self = this;
				var orderInfo = Util.getOrderInfo();
				$("#rest-menu01-js").removeClass("on");
				$("#rest-menu02-js").removeClass("on");
				$("#rest-menu03-js").addClass("on");
				$(".rest-menu ul li span").removeClass("on");
				$('.pull-box').css("display", "block");
				self.onTable = "old";
				self.clearBeforeData();
				// 消息等待
				Util.Busy.start();
/*				if (self.getRestaurantFromLocal() == null) {
					//Util.showInstantMessage({content : Constant.app_search.shortMsg_guessBtn});
					//清空数据，显示提示信息
					self.dataList.splice(0);
					self.initShopList(self.dataList,"old");
				} else {
					// 从本地获取历史记录
					var dataArray = self.getRestaurantFromLocal();
					// 排序（最新的在前面）
					dataArray.sort(function(a, b) {
						return Date.parse(new Date(a.dateTime)) < Date.parse(new Date(b.dateTime)) ? 1 : -1;
					});
					var resCode = new Array();
					$.each(dataArray,
					function(i, item) {
						resCode.push(item.storecode);
					});*/
					// 获取餐厅数据：根据餐厅代码，调用服务器获取数据
					var condition = {
						"wxOpenId": orderInfo.openId+"",
						"page":'1',
						"limit":Config.storeLoadPerPage+""
					};
					Model.Store.loadQueuedRestaurantLists({key: JSON.stringify(condition)}, function(scret) {
						// 返回结果成功
						if (scret.status == "0") {
							//Util.storeList = scret.data;
							self.pageNo = 1;
							// 初始化列表
							self.dataList = scret.data;
							self.initShopList(self.dataList,"old");
						} else {
							Util.Busy.stop();
							//异常时，清空数据，显示提示信息
							self.dataList.splice(0);
							self.initShopList(self.dataList,"old");
						}
					});
			},
			// 从本地缓存中读取页面餐厅数据
			getRestaurantFromLocal: function() {
				return Util.getLocalItem("preorder.wap.restaurant");
			},
			//数据模式切换，清空之前的数据 
			clearBeforeData: function() {
				var self = this;
				//销毁滚动列表框
				self.myScroll.destroy();
				self.initScroll();

				self.attr("showItemList").splice(0);
				self.pullUpEl.css("display", "none");
				self.$TimeSelect.css("display", "none");
				//没有找到餐厅，提示信息
				if ($(".no-rest").length > 0) {
					$(".no-rest").remove();
				}

			},
			// 显示列表数据
			/**
			 * @param index 标明默认选中餐厅的index
			 * @param flag 标明是否从地图模式返回
			 */
			initShopList: function(rec,tap) {
				var self = this;
				self.$TimeSelect.empty();
				var param = rec;
				self.param = param;
				if (self.list_map == "isList") { //地图模式，列表数据
					if(self.onTable && tap && self.onTable!=tap){
						return;
					}
					if(self.onTable == "all" || self.onTable == "old"){
						if (!isNaN(param.length) && param.length > 0) {
							if(param.length < Config.storeLoadPerPage){
								self.pullUpEl.css("display", "none");
							}else{
								self.pullUpEl.css("display", "block");
								self.pageNo++;
							}
							self.attr("showItemList",param);
							Util.Busy.stop();
							//当数据加载时，初始化滚动列表框
							self.myScroll.refresh(0);
						}else{
							if(self.onTable == "old"){
								self.$tip_append.append(self.$Message_old);
							}else{
								self.$tip_append.append(self.$Message_all);
							}
						}
					}else{
						if (!isNaN(param.length) && param.length > 0) {
							var endIndex = param.length;
							var startIndex = 0;
							//数据分页
							if (param.length > (self.pageNo + 1) * self.accPerPage) {
								self.pullUpEl.css("display", "block");
								endIndex = (self.pageNo + 1) * self.accPerPage;
							} else {
								self.pullUpEl.css("display", "none");
							}
							if (self.pageNo != 1) {
								startIndex = self.pageNo * self.accPerPage;
							}
							if (startIndex < endIndex) {
								self.pageNo++;
							}
	
							for (; startIndex < endIndex; startIndex++) {
								var restaurant = param[startIndex];
								//把要显示的数据放入 showItemList
								if (restaurant != undefined) {
									self.attr("showItemList").push(restaurant);
								}
							}
						} else {
							//显示未找到餐厅提示信息
							if (self.onTable == "nearby") {
								self.$tip_append.append(self.$Message_nearby);
							} else if (self.onTable == "old") {
								self.$tip_append.append(self.$Message_old);
							} else {
								self.$tip_append.append(self.$Message_all);
							}
	
						}
					}
					Util.Busy.stop();
					//当数据加载时，初始化滚动列表框
					self.myScroll.refresh(0);
					Util.lazyLoad.lazy({time_out: 1000});
					//选中默认餐厅
					if (self.onTable == "nearby") {
						if (self.showItemList && self.showItemList.length > 0) {
							//self.$RestaurantList.find("li:eq(0)").trigger("tap");
							self.$RestaurantList.find("li").eq(0).trigger("tap");
						}
					} else {
						if (self.showItemList && self.showItemList.length == 1) {
							//self.$RestaurantList.find("li:eq(0)").trigger("tap");
							self.$RestaurantList.find("li").eq(0).trigger("tap");
						}
					}
				} else if (self.list_map == "isMap") { //地图模式，绘制餐厅地图坐标
					Util.Busy.stop();
					self.change_tomap();
				}

			},
			_trimTime: function(time, flag) {
				var h_m = time.split(':');
				var h = parseInt(h_m[0]),
				m = parseInt(h_m[1]);
				var p = m % 5,
				t = Math.floor(m / 5);
				if (flag) {
					m = p > 0 ? (t + 1) * 5 : t * 5;
					if (m == 60) {
						m = 0;
						h += 1;
					}
				} else {
					m = p > 0 ? t * 5 : (t - 1) * 5;
					if (m < 0) m = 0;
				}
				return {h: h,m: m};
			},
			//点击餐厅列表项====》 展开、关闭选择取餐时间
			selectTime: function(context, el, ev) {
				var self = this;
				var $this = el;
				var param = self.param;
				//点击item的id
				var _index = $this.attr("index");
				// 创建div（不满足时间要求）
				var timeNo = ('<span class="jiant"></span><div class="mealtime-main" id="mealtime-main">' + '<div class="mealtime-detail-msg">' + '<h4 >' //class="timeprompt-msg"
				+ '{0}' + '</h4>' + '</div>' + '</div>');
				// 展开（关闭-->展开）：时间显示
				if (self.$TimeSelect.css("display") == 'none' || self._$TimeSelectcurr && _index != self._$TimeSelectcurr) {
					Util.Busy.start();
					self.pickLaterHour = null;
					self.pickLaterHour = null;
					var status = parseInt(param[_index].status, 10);
					switch (status) {
					case 0:
						// 给div赋值
						var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_0.replace('{0}', param[_index].starttime));

						self.$TimeSelect.addClass("mealtime");
						self.$TimeSelect.html(timeNoStr);
						$this.after(self.$TimeSelect);
						Util.Busy.stop();
						self.$TimeSelect.css("display", "-webkit-box");
						break;
					case 1:
						Model.Store.getStoreNotAvailableTime({
							"storeCode":
							param[_index].storecode
						},
						function(scret) {
							if (scret.status == "ok") {
								self.selectedIndex = _index;
								var timeData = scret.data;
								var starttime = self._trimTime(timeData.startTime, true);
								var endtime = self._trimTime(timeData.endTime, false);
								var hour = starttime.h;
								var minute = starttime.m;
								if (hour < 10) {
									hour = "0" + hour;
								}
								if (minute < 10) {
									minute = "0" + minute;
								}
								self.picknowHour = hour;
								self.picknowMinute = minute;
								self.showTimeHour = hour;
								self.showTimeMinute = minute;
								self.timeData = {
									minTimeHour: starttime.h,
									minTimeMinute: starttime.m,
									maxTimeHour: endtime.h,
									maxTimeMinute: endtime.m
								};
								var timeYes = can.view('templates/store_bookingdate.mustache', {
									timeData: self.timeData
								});
								self.$TimeSelect.html(timeYes);
								$this.after(self.$TimeSelect);
								Util.Busy.stop();
								self.$TimeSelect.css("display", "block");
								// 刷新滚动Scroll,指定滚动到指定的元素
								self._scrollRefresh(_index);
							} else {
								Util.Busy.stop();
								if (scret.errCode) {
									var errCode = parseInt(scret.errCode, 10);
									switch (errCode) {
									case 131:
										// 给div赋值
										var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_0.replace('{0}', param[_index].starttime));
										self.$TimeSelect.addClass("mealtime");
										self.$TimeSelect.html(timeNoStr);
										$this.after(self.$TimeSelect);
										self.$TimeSelect.css("display", "-webkit-box");
										// 刷新滚动ScrollView
										self.myScroll.refresh(0);
										break;
									case 132:
										// 给div赋值
										var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_1.replace('{0}', param[_index].starttime).replace('{1}',param[_index].endtime));
										self.$TimeSelect.addClass("mealtime");
										self.$TimeSelect.html(timeNoStr);
										$this.after(self.$TimeSelect);
										self.$TimeSelect.css("display", "-webkit-box");
										// 刷新滚动ScrollView
										self.myScroll.refresh(0);
										break;
									default:
										// 给div赋值
										var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_1.replace('{0}', param[_index].starttime).replace('{1}',param[_index].endtime));
										self.$TimeSelect.addClass("mealtime");
										self.$TimeSelect.html(timeNoStr);
										$this.after(self.$TimeSelect);
										self.$TimeSelect.css("display", "-webkit-box");
										// 刷新滚动ScrollView
										self.myScroll.refresh(0);
										break;

									}
								}
							}
						});
						break;
					case 2:
						// 给div赋值
						var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_2);
						self.$TimeSelect.addClass("mealtime");
						self.$TimeSelect.html(timeNoStr);
						$this.after(self.$TimeSelect);
						Util.Busy.stop();
						self.$TimeSelect.css("display", "-webkit-box");
						break;
					case 3:
						// 给div赋值
						var timeNoStr = timeNo.replace('{0}', param[_index].statuscomments ? param[_index].statuscomments: Constant.app_search.tips_4);
						self.$TimeSelect.addClass("mealtime");
						self.$TimeSelect.html(timeNoStr);
						$this.after(self.$TimeSelect);
						Util.Busy.stop();
						self.$TimeSelect.css("display", "-webkit-box");
						break;
					case 4:
						// 给div赋值
						var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_3);
						self.$TimeSelect.addClass("mealtime");
						self.$TimeSelect.html(timeNoStr);
						$this.after(self.$TimeSelect);
						Util.Busy.stop();
						self.$TimeSelect.css("display", "-webkit-box");
						break;
					default:
						break;
					}
				} else { //当前选择项和之前相同
					self.selectedIndex = -1;
					self.$TimeSelect.css("display", "none");
					self.myScroll.refresh(1);
				}

				self._$TimeSelectcurr = _index;
				self.$TimeSelect.attr("index", _index);
			},
			// 地图模式，餐厅点击初始化
			init_mapItem: function(index, param, infowindow, storeScope,openCallBack) {
				var self = storeScope;
				//var param = self.param;
				//点击item的id
				self.pickLaterHour = null;
				self.pickLaterHour = null;
				var _index = index;
				var $time_select = $(infowindow.querySelector("#select"));// $(infowindow).find("#time_select_map #select");
				// 创建div（不满足时间要求）
				var timeNo = ('<span class="jiant"></span><div class="mealtime-main" id="mealtime-main">' + '<div class="mealtime-detail-msg">' + '<h4 >' //class="timeprompt-msg"
				+ '{0}' + '</h4>' + '</div>' + '</div>');
				var status = parseInt(param[_index].status, 10);
				switch (status) {
				case 0:
					// 给div赋值
					var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_0.replace('{0}', param[_index].starttime));
					$time_select.html(timeNoStr);
					Util.Busy.stop();
					openCallBack(false);
					break;
				case 1:
					Model.Store.getStoreNotAvailableTime({
						"storeCode":
						param[_index].storecode
					},
					function(scret) {
						if (scret.status == "ok") {
							self.selectedIndex = _index;
							// 从数据中获取时间
							var timeData = scret.data;
							var starttime = self._trimTime(timeData.startTime, true);
							var endtime = self._trimTime(timeData.endTime, false);
							var hour = starttime.h;
							var minute = starttime.m;
							if (hour < 10) {
								hour = "0" + hour;
							}
							if (minute < 10) {
								minute = "0" + minute;
							}
							self.picknowHour = hour;
							self.picknowMinute = minute;
							self.showTimeHour = hour;
							self.showTimeMinute = minute;
							//							self.showTimeHour = null;
							//							self.showTimeMinute = null;
							self.timeData = {
								minTimeHour: starttime.h,
								minTimeMinute: starttime.m,
								maxTimeHour: endtime.h,
								maxTimeMinute: endtime.m
							};
							openCallBack(true);
							Util.Busy.stop();
						} else {
							Util.Busy.stop();
							if (scret.errCode) {
								var errCode = parseInt(scret.errCode, 10);
								switch (errCode) {
								case 131:
									// 给div赋值
									var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_0.replace('{0}', param[_index].starttime));
									$time_select.html(timeNoStr);
									Util.Busy.stop();
									openCallBack(false);
									break;
								case 132:
									// 给div赋值
									var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_1.replace('{0}', param[_index].starttime).replace('{1}',param[_index].endtime));
									$time_select.html(timeNoStr);
									Util.Busy.stop();
									openCallBack(false);
									break;
								default:
									// 给div赋值
									var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_1.replace('{0}', param[_index].starttime).replace('{1}',param[_index].endtime));
									$time_select.html(timeNoStr);
									Util.Busy.stop();
									openCallBack(false);
									break;

								}
							}
						}
					});
					break;
				case 2:
					// 给div赋值
					var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_2);
					$time_select.html(timeNoStr);
					Util.Busy.stop();
					openCallBack(false);
					break;
				case 3:
					// 给div赋值
					var timeNoStr = timeNo.replace('{0}', param[_index].statuscomments ? param[_index].statuscomments: Constant.app_search.tips_4);
					$time_select.html(timeNoStr);
					Util.Busy.stop();
					openCallBack(false);
					break;
				case 4:
					// 给div赋值
					var timeNoStr = timeNo.replace('{0}', Constant.app_search.tips_3);
					$time_select.html(timeNoStr);
					Util.Busy.stop();
					openCallBack(false);
					break;
				default:
					break;
				}
			},
			timePick: function(time) {
				var hour = time[0];
				var minute = time[1];
				this.pickLaterHour = hour;
				this.pickLaterMinute = minute;
				this.showTimeHour = hour;
				this.showTimeMinute = minute;
				$(".time02-js").removeClass("on").css("display", "none");
				if (!$(".time03-js").hasClass("on")) {
					$(".time03-js").addClass("on").css("display", "block");
				}
				$(".time03-js span span").html(this.showTimeHour + ":" + this.showTimeMinute + "&nbsp;&nbsp;&nbsp;&nbsp;");
			},
			enter_menu: function() {
				var self = this;
				var _index = self.selectedIndex;
				//清除search状态
				Util.removeSessionItem("preorder.wap.storepatternBykey");
				//保存list_map状态
				Util.setSessionItem("preorder.wap.storepattern", self.list_map + "_" + self.onTable);
				// 设定当前选中的餐厅对象
				Util.restaurant.selectedItem = self.param[_index];
				var bookingTime = "";
				if ($(".time01-js").hasClass("on")) {
					bookingTime = self.picknowHour + ":" + self.picknowMinute;
				} else {
					if (self.pickLaterHour) {
						bookingTime = self.pickLaterHour + ":" + self.pickLaterMinute;
					} else {
						bookingTime = self.picknowHour + ":" + self.picknowMinute;
					}
				}
				// 选择的时间
				Util.restaurant.selectedItem.selectedTime = bookingTime;
				// 创建订单
				Util.Busy.start();
				Model.Order.createOrder({
					"storeCode": Util.restaurant.selectedItem.storecode,
					"bookingDate": Util.restaurant.selectedItem.selectedTime,
					"customer": Util.getCustomerInfo(),
					"portalSource":sessionStorage.getItem('preorder.wap.portalsource')
				},
				function(scret) {
					if (scret.status == "ok") {
						Util.saveOrderInfo(scret.data);
						self.selectedStore = Util.restaurant.selectedItem;
						Util.saveCurrentStore(Util.restaurant.selectedItem);
						Util.clearTempData();
						Util.Route.route(self, {
							page: "store",
							func: "menu",
							code: self.selectedStore.storecode
						});
					} else {
						Util.Busy.stop();
						if (scret.errCode) {
							var status = parseInt(scret.errCode, 10);
							switch (status) {
							case 401:
								Util.showInstantMessage({
									content:
									Constant.app_search.insMsg_errStore_401
								});
								break;
							case 406:
								Util.showInstantMessage({
									content:
									Constant.app_search.insMsg_errStore_406
								});
								break;
							case 407:
								Util.showInstantMessage({
									content:
									Constant.app_search.insMsg_errStore_407
								});
								break;
							case 443:
								Util.showInstantMessage({
									content:
									Constant.app_search.insMsg_errStore_443
								});
								break;
							case 470:
								Util.showInstantMessage({
									content:
									Constant.app_search.insMsg_errStore_470
								});
								break;
							case 471:
								Util.showInstantMessage({
									content:
									Constant.app_search.insMsg_errStore_471
								});
								break;
							case 2:
								Util.showInstantMessage({
									content:
									Constant.globle.insMsg_errStore_2
								});
								break;
							case 1012:
								Util.showInstantMessage({
									content:
									Constant.globle.insMsg_errService_1012
								});
								break;
							case - 1 : Util.showInstantMessage({
									content: Constant.globle.insMsg_errIO
								});
								break;
							default:
								Util.showInstantMessage({
									content:
									Constant.globle.insMsg_errNo
								});
								break;
							}
						}
					}
				});
			},
			change_tomap: function() {
				var self = this;
				//切换地图模式前，清除列表模式已选中store的【取餐时间选择框】
				self.$TimeSelect.empty();
				//设置选择城市地图中心经纬度
				var longitude = self.longitude;
				var latitude = self.latitude;
				if (self.onTable != "nearby") {
					//self.param是查询++过滤以后的数据
					if (self.param && self.param.length > 0) {
						var stores = self.param;
						var selectGPS = false;
						if(self._$TimeSelectcurr){
							var selectStore = stores[parseInt(self._$TimeSelectcurr)];
							if(selectStore.lng && selectStore.lat){
								//设置显示的地图中心经纬度
								longitude = parseFloat(selectStore.lng);
								latitude = parseFloat(selectStore.lat);
								selectGPS = true;
							}
						}
						if(!selectGPS){
							for (var i = 0; i < stores.length; i++) {
								if (stores[i].lng && stores[i].lat) {
									//设置显示的地图中心经纬度
									longitude = parseFloat(stores[i].lng);
									latitude = parseFloat(stores[i].lat);
									break;
								}
							}
						}
					}
				}
				Util.StoreMap.open({
					"storeList": self.param,
					"cityCode": Util.getCurrCity().citycode,
					"syncTime": Util.sysTime,
					"longitude": longitude,
					"latitude": latitude,
					"selectedIndex": self._$TimeSelectcurr//parseInt(self._$TimeSelectcurr)
				},self);
			},
			//控制餐厅页面显示模式和选中状态
			selectedPatternControl: function() {
				var self = this;
				var patternCon = Util.getSessionItem("preorder.wap.storepattern");
				if (patternCon) {
					var paArray = patternCon.split("_");
					self.list_map = paArray[0];
					self.onTable = paArray[1];
				}
				//列表模式、地图模式
				if (self.list_map == "isList") {
					self.list_map = "isList";
					$(".rest-list").show();
					$("#iCenter").hide();
					$("#list_map").removeClass("map-b02");
					$("#list_map").addClass("map-b");
				} else if (self.list_map == "isMap") {
					self.list_map = "isMap";
					$("#list_map").removeClass("map-b");
					$("#list_map").addClass("map-b02");
				}
				if (self.onTable == "nearby") {
					//self.getRestaurantListNearby();
				} else if (self.onTable == "all") {
					self.getAllResturants();
				} else if (self.onTable == "old") {
					self.getRestaurantListFromLoc();
				}

			},
			pageOption: function() {
				return {
					storelist: this.dataList
				};
			},
			pageChangeOption: function(page) {
				switch (page) {
				case "menuList":
					return {
						selectedStore:
						this.selectedStore
					};
				case "storemenu":
					return {
						selectedStore:
						this.selectedStore
					};
				}
				return false;
			},
			changeShowMode:function(context,el,ev){
				if($(el).hasClass("map-b02")){
					Util.Busy.start();
					var self = this;
					self.list_map = "isList";
					$(".rest-list").show();
					$("#iCenter").hide();
					$("#list_map").removeClass("map-b02").addClass("map-b");
					//地图模式返回，重新加载列表模式
					Util.StoreMap.clearInfo();
					self.initShopList(self.dataList,self.onTable);
					if (window._tag) { 
						_tag.dcsMultiTrack('wt.event', 'storeList', 'wt.msg', '餐厅列表页面加载');
					}
				}else{
					Util.Busy.start();
					var self = this;
					self.list_map = "isMap";
					$("#list_map").removeClass("map-b").addClass("map-b02");
					//绘制餐厅地图坐标
					self.change_tomap();
					if (window._tag) { 
						_tag.dcsMultiTrack('wt.event', 'storeMap', 'wt.msg', '餐厅列表页面地图模式');
					}
				}
			}
		},
		helpers: {
			//添加页面需要的helper function（options）
		},
		events: {
			inserted: function() {
				// 这个不起作用,inserted这个方法在没有render完成之前就调用了，这个li元素还没有创建，所以不起效果
				//把这个调用放到render完成处理
				//$("li").hammer(); 
			},
			'.time01-js tap': function(el, ev) {
				ev.preventDefault();
				var $this = el;
				if (!$this.hasClass("on")) {
					$this.addClass("on");
					$(".time02-js").removeClass("on");
					$(".time03-js").removeClass("on");
					$(".time02-js").css("display", "block");
					$(".time03-js").css("display", "none");
				}
				return false;

			},
			'.time03-js span.other-on tap': function(el, ev) {
				ev.preventDefault();
				if (!$(".time03-js").hasClass("on")) {
					$(".time03-js").addClass("on");
					$(".time01-js").removeClass("on");
				}
				var self = this.scope;
				var temp = self.timeData;
				//Util.LoadFile.loadJsFile("mobiscroll.js",
				require(['utils/mobiscroll'],function() {
					$('#test_default').scroller('destroy').scroller({
						preset: 'time',
						minDate: new Date(2015, 5, 5, temp.minTimeHour, temp.minTimeMinute),
						maxDate: new Date(2015, 5, 5, temp.maxTimeHour, temp.maxTimeMinute),
						stepMinute: 5,
						theme: 'ios',
						mode: 'scroller',
						display: 'bottom',
						//						display: 'bubble',
						lang: 'zh'
					});
					//			    	$('.time02-js').focus();
					$('#test_default').focus();
					//.addClass("animated").addClass("fadeInUpBig")
					$('.dw.dwbg').css({
						top: 'auto',
						bottom: '0px',
						left: "0px",
						"width": "100%",
						height: '190px',
						position: 'fixed'
					});
					$(".dwwr").css({
						"width": "100%"
					});
					$(".dwwc.dwrc table").css({
						"width": "100%"
					});
					$('#test_default').unbind("change").bind("change",
					function() {
						var selectedTime = $(this).val();
						self.timePick(selectedTime.split(':'));
					});
				});
				return false;
			},
			//进入菜单
			'.box #enter_menu tap': function(el, ev) {
				this.scope.enter_menu();
			},
			'#rest-menu02-js tap': function(el, ev) {
				var self = this.scope;
				self.getAllResturants();
			},
			//返回首页
			".head-home tap": function(el, ev) {
				Util.Route.route(this, {page: "store", func: "list"});
			},
			//进入搜素页面
			".head-sec tap": function(el, ev) {
				var self = this.scope;
				//Util.setSessionItem("preorder.wap.storepattern", self.list_map + "_" + self.onTable);
				Util.Route.route(self, {page: "store",func: "search"});
			},
			".amap-info-close tap": function(el, ev) {
				Util.StoreMap.clearInfo();
			},
			"#pr-lay-close-js tap": function() {
				$("#paidui_cover").hide();
				$("#paidui_cover").remove();
				return false
			},
			"#layer-box02-js tap": function(G, H) {
				var F = H.gesture.target.id;
				if (F != "layer-box02-js") {
					return false
				}
				$("#paidui_cover").hide();
				$("#paidui_cover").remove();
				return false
			},
			".rest-li-js .box tap": function(element, event) {
				var self = this.viewModel;
				var orderInfo = Util.getOrderInfo();
				var model = can.data($(element).parent(), "storeInfo");
                /*if(model.countTable == 0){
					Util.showInstantMessage({
						content: '现在无需排队，直接来店吧！',
						duration: 3000
					});
					return false;
				}*/
				Util.saveCurrentStore(model);
				Util.Route.route(this, {page: "store", func: "info"});
			},
			"#build_voucher tap": function(element, event) {
				if($(element).attr("data-disabled") == 'true') return;
				$(element).attr("data-disabled",'true');
				var self = this.viewModel;
				var p_number = $('#p_number').val();
				var telphone = $('#telphone').val();
				var isPhone = Util.utilities.reCellphone.test(telphone);
				if(isNaN(p_number) || p_number ==''){
					Util.showInstantMessage({
						content: Config.Message.invalidatedNumber,
						duration: 3000
					});
					$("#p_number").css("border-color", "#ff6326");
					$("#p_number").focus();
					return false;
				} else {
					$("#p_number").css("border-color", "#d2d0d1");
				}
				if(!isPhone){
					Util.showInstantMessage({
						content: Config.Message.invalidatedPhoneNumber,
						duration: 3000
					});
					$("#telphone").css("border-color", "#ff6326");
					$("#telphone").focus();
					return false;
				} else {
					$("#telphone").css("border-color", "#d2d0d1");
				}

				var model = can.data($(element).parent().parent().parent().parent(), "storeInfo");

				var cloudId = model.cloudId;
				var orderInfo = Util.getOrderInfo();
				var parameters = {
					wxOpenId: orderInfo.openId+"",
					//wxOpenId: "af5e2556-2fe9-464b-a71a-9c888ccfd03c",
					peopleCount: p_number,
					tel: telphone,
					cloudId: cloudId
				};
				// 取号
				Model.Store.pushQueueInfoToPad({key: JSON.stringify(parameters)}, function (Data) {
					$(element).attr("data-disabled",'true');
					if(Data.status == '0'){
						Util.saveCurrentStore(parameters);
						Util.Route.route(this, {page: "queue", func: "certificate"});
					}else{
						$(element).attr("data-disabled",'false');
						Util.showInstantMessage({
							content: Data.message,
							duration: 2000
						});
					}
				});
			}
		}
	});
});