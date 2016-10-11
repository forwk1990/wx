define(['model','util','constant'],function(Model, Util, Constant) {
	return can.Component.extend({
		tag: "storeinfo",
		template: can.view(Util.getView("storeinfo")),
		scope: {
			cityName: null,
			list_map: "isList",
			longitude: 121.4000,
			//上海
			latitude: 31.2000,
			lng:null,
			lat:null,
			onTable: "tableinfo",
			//[all,nearby,old]
			selectedIndex: -1,
			pageNo: 1,
			timer: null,
			timer_other: null,
			timer_number:0,
			timer_other_number:0,
			dataList: null,
			//服务返回的原始数据集
			accPerPage: parseInt((window.innerHeight - $(".wrapper-head").height() - $(".rest-menu").height()) / 66) + 1,
			//根据屏幕大小来确定每页显示多少条记录
			showItemList: [],
			//排队桌台信息
			showTableInfo: [],
			//页面要显示的数据集
			init: function() {
				var self = this;
				var currentStore = Util.getCurrentStore(),
					 orderInfo = Util.getOrderInfo();
				console.log(currentStore);
				self.attr('showItemList',currentStore);
				var parameters = {
					wxOpenId: orderInfo.openId+"",
					cloudId: currentStore.cloudId
				};
				// 获取队列状态
				Model.Store.startWXQueue({key: JSON.stringify(parameters)}, function (result) {
						result.cloudId = currentStore.cloudId;
						can.each(result.data,function(value,index){
							if(value.count == 0){
								value.avgTime = '<span class="avgTime">——</span>';
							}else{
								value.avgTime = value.avgTime * value.count;
							}
							if(value.maxPeople == 0){
								value.maxPeople = value.minPeople +'人以上';
							}else{
								value.maxPeople = value.minPeople+'~'+value.maxPeople+'人';
							}
						});
						self.attr('showTableInfo',result.data);
						Util.Busy.stop();
				});
			},
			getQueueInfo:function(parameters){
				var self = this;
				if(self.onTable !== 'tableinfo') return;
				self.timer_number++;
				Model.Store.getWXQueueInfo({key: JSON.stringify(parameters)}, function (result) {
					if(result.status == '0'){
						if(result.data.length > 0){
							Util.Route.route(self, {page: "queue", func: "certificate"});
							return false;

						}else{
							if(self.timer_number > 5) return;
							self.timer = setTimeout(function(){
								self.getQueueInfo(parameters);
								clearTimeout(self.timer);
							},1000);
						}
					}
				});
			}
		},
		helpers: {
			//添加页面需要的helper function（options）
		},
		events: {
			".head-home tap": function(el, ev) {
				Util.Route.route(this, {page: "store", func: "list"});
			},
			//进入搜素页面
			".head-sec tap": function(el, ev) {
				var self = this.scope;
				Util.Route.route(self, {page: "store",func: "search"});
			},
			"#pr-lay-close-js tap": function() {
				$("#paidui_cover").hide();
				$("#paidui_cover").remove();
				return false
			},
			".btn_close tap": function() {
				$("#paidui_cover").hide();
				$("#paidui_cover").remove();
				return false
			},
			"#build_alert tap": function(element, event) {
				var currentStore = Util.getCurrentStore(),
					 orderInfo = Util.getOrderInfo();
				var parameters = {
					wxOpenId: orderInfo.openId+"",
					cloudId: currentStore.cloudId
				};
				// 获取队列状态
				Model.Store.startWXQueue({key: JSON.stringify(parameters)}, function (result) {
					if(result.status == "2"){
						Util.showInstantMessage({
							content: '此餐厅该时间段未开启排队功能！',
							duration: 2000
						});
						Util.Busy.stop();
						return false;
					}
					if(result.status == "0" || result.status == "3" || result.status == "4"){
						//result.cloudId = currentStore.cloudId;
						var popWindowHtml = can.view(Util.getView("storeinfo.popWindow.mustache"), {showItemList:currentStore});
						can.$("#wrapper-main").append(popWindowHtml);
						$("#paidui_cover").show();
						if(currentStore.peopleCount && currentStore.tel) {
							$('#p_number').val(currentStore.peopleCount);
							$('#telphone').val(currentStore.tel);
						}
					}else{
						Util.Route.route(this, {page: "queue", func: "certificate"});
						return false;
					}
				});
			},
			"#build_voucher tap":function(element, event){
				var ele = $(element);
				if(ele.attr("data-disabled") == 'true') return;
				ele.attr("data-disabled",'true');
				var self = this.viewModel,
				    orderInfo = Util.getOrderInfo(),
				    currentStore = Util.getCurrentStore(),
				    p_number = $('#p_number').val();
				    telphone = '';
				if(isNaN(p_number) || p_number ==''){
					$("#p_number").focus();
					$("#p_number").css("border-color", "#ff6326");
					ele.attr("data-disabled",'false');
					Util.showInstantMessage({
						content: Config.Message.invalidatedNumber,
						duration: 3000
					});
					return false;
				} else {
					$("#p_number").css("border-color", "#d2d0d1");
				}

				if(currentStore.isNeedTel === 1){
					telphone = $('#telphone').val();
					var isPhone = Util.utilities.reCellphone.test(telphone);
					if(!isPhone){
						$("#telphone").css("border-color", "#ff6326");
						$("#telphone").focus();
						ele.attr("data-disabled",'false');
						Util.showInstantMessage({
							content: Config.Message.invalidatedPhoneNumber,
							duration: 3000
						});
						return false;
					} else {
						$("#telphone").css("border-color", "#d2d0d1");
					}
				}

				var parameters = {
					wxOpenId: orderInfo.openId+"",
					//wxOpenId: "omJDOvqqVWhb_lnjKer4CAErrSAU",
					peopleCount: parseInt(p_number),
					tel: telphone,
					cloudId: currentStore.cloudId
				};
				// 取号
				Model.Store.pushQueueInfoToPad({key: JSON.stringify(parameters)}, function (Data) {
					ele.attr("data-disabled",'true');
					if(Data.status == '0'){
						Util.Busy.start();
						self.getQueueInfo(parameters);
					}else{
						ele.attr("data-disabled",'false');
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