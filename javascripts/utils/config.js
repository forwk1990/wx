/**
 * Created by team on 16/2/23.
 */

var Config = {

    Debug: true,

    leftMenuWidth: 91,

    // 若有子菜单，子菜单是否默认展开
    isExpandedChildMenu: false,

    // 是否现实广告信息
    isShowAdvertisement: false,

    // 入口页面
    entryPage: "index.html",

    entryComponent: "storemenu",

    storeLoadPerPage: 5,

    preloadImageArray: ["newicon01.png", "newicon02.png", "arrow-right.png", "menu_close.png", "category.png", "check_checked.png", "check_normal.png", "check_disabled.png"],

    authorizePathArray: ["store/list", "index.html"],

    // 网站请求的域名根路径
    baseUrl: "http://www.bj-evetime.com/",

    // 订单接口的相对路径
    orderRelativePath: "/meishiappserver/services/RestaurantInfoServer/",

    // 页面相对路径
    wapcontext: "/wx/", // 若为本机调试环境，修改为"/~team/wx/"

    //这个是高德JavaScript版地图的地址，参数中的key请更换
    amapJsPath: 'http://webapi.amap.com/maps?v=1.3&key=36dfbbf488a4d22bd8cb6127f1f7d4e2',

    // 微信相关
    WX: {
        appId: "wxd9410e2b20cefa01"
    },

    // 提示信息
    Message: {
        noPhoneNumber: "您还未输入手机号",
        invalidatedPhoneNumber: "手机号格式不正确",
        invalidatedNumber: "请输入正确的就餐人数",
        noOrderInfo: "您还未未订购任何菜品",
        tallyuping: "正在发起支付...",
        QueueSysBusy: "排队系统繁忙，请重新生成！",
        emptyOrder: "购物车为空，系统将为您跳转到点餐页面!",
        restaurantOffline: "对不起，商家已离线,无法为您下单，敬请谅解!",
        noResponse: "暂时无法下单，请联系商家处理!"
    },

    domainPath: "meishiappserver",

    // webservice接口映射
    Api: {
        getAllMenu: "/services/RestaurantInfoServer/GetFoodInfo",
        getOrderDetail: "/services/OrderInfoServer/getOrderDetailsInfo",
        getRestaurantInfo: "/services/RestaurantInfoServer/getRestaurantInfoById",
        createOrder: "/services/FoodInfoServer/addOrder",
        wxSelfPay: "/wxpt/payRequest.jsp",
        wxPay: "/services/wftpay", // 2016-07-07 威富通接口调试新地址
        wxPayConfig: "/wxpt/payConfig.jsp",
        wxConfig: "/wxpt/wxConfig.jsp",
        loadRestaurantLists: "/services/QueueServer/loadRestaurantLists",
        startWXQueue: "/services/QueueServer/startQueue",
        pushQueueInfoToPad: "/services/QueueServer/pushQueueInfoToPad",
        getWXQueueInfo: "/services/QueueServer/getQueueInfo",
        getQueueInfoList: "/services/QueueServer/getQueueInfoList",
        getTableWatingCountOfEveryTableType: "/services/QueueServer/getTableWatingCountOfEveryTableType",
        refreshQueueInfo: "/services/QueueServer/refreshQueueInfo",
        cancelQueue: "/services/QueueServer/updateQueueStatus",
        deleteQueueInfo: "/services/QueueServer/updateQueueFlag",
        loadRestaurantListsByKeyword: "/services/QueueServer/loadRestaurantListsByKeyword",
        loadQueuedRestaurantLists: "/services/QueueServer/loadQueuedRestaurantLists",
        loadMyOwnOrderDetailsInfo: "/services/OrderInfoServer/loadMyOwnOrderDetailsInfo"
    },

    // 模块的根路径
    moduleRootPath: "/javascripts/modules/",
};

// 定义支付模式
var PayMode = {
    NoPay:0,
    MSPay:1,
    WFTPay:2
}

// 若为调试环境，设置调试相关信息
if (Config.Debug) {
    Config.wapcontext = "/~itachi/wx/";
    Config.baseUrl = "http://192.168.31.192:8088/";
}
