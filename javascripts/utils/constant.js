define(function() {
    var A = {
        user: {
            loginErrorMsg: {
                "131": "用户信息不存在，请先注册！",
                "148": "手机号登录时密码错误次数太多",
                "149": "本次登录需要短信验证码！",
                "138": "验证码输入不正确或已过期！",
                "101": "手机号码尚未注册，请先进行注册",
                "default": "账户名或登录密码不正确，请重新输入"
            },
            registerErrorMsg: {
                "130": "验证码不存在或已过期，请重新获取。",
                "138": "验证码不正确，请输入正确的验证码！",
                "139": "该手机号码已注册，请直接登录",
                "135": "该手机号码已注册，请直接登录"
            },
            resetPwdErrorMsg: {
                "130": "验证码不存在或已过期，请重新获取。",
                "135": "该手机号码已注册，请直接登录",
                "138": "验证码不正确，请输入正确的验证码！",
                "101": "手机号码尚未注册，请先进行注册"
            }
        },
        globle: {
            quitOrdering: "您确定要放弃本次订餐并重新点餐吗？",
            msg_title: "友情提示",
            invalidUid: "请正确填写联系手机号码。",
            minnum: "产品数量不能少于1。",
            maxnum: "同一产品最多订99份。",
            choosePack: "请选择包装方式。",
            networkFailed: "很抱歉，网络错误，暂时无法订餐。",
            insMsg_errNo: "操作失败，请重新尝试一次，\n如果网络不通畅，请稍后再试！",
            insMsg_errIO: "操作失败，请重新尝试一次，\n如果网络不通畅，请稍后再试！",
            insMsg_errStore_2: "很抱歉，系统暂时无法提供服务，敬请原谅。",
            insMsg_errService_1012: "操作失败，请重新尝试一次，\n如果网络不通畅，请稍后再试！",
            submit_repeatedly_467: "该订单已支付，不可修改，请重新点餐!"
        },
        app_home: {
            caption_quit: "退出",
            description_quit: "是否退出KFC自助点餐?",
            okCaption: "确定",
            cancelCaption: "取消",
            caption_city: "正在获取城市列表，请稍候...",
            insMsg_gps: "GPS定位功能尚未启用",
            insMsg_around: "附近肯德基尚未启用",
            insMsg_errCity_100: "无法获取到城市数据",
            insMsg_search: "搜索内容不能为空",
            entersearchorder: "进入查询订单",
            entercannelorder: "进入取消订单",
            enterhelpcenter: "进入帮助中心",
            checkgps: "请检查网络或GPS是否已启用",
            gpstimeout: "位置信息获取超时"
        },
        app_search: {
            caption_backto_home: "返回主页",
            entermenu: "进入美味菜单",
            gpsno: "地图模式功能尚未启用！",
            loadingdata: "正在获取餐厅列表，请稍候...",
            loadingdatanew: "正在查找您近期去过的肯德基餐厅,请稍候...",
            norestaurantdata: "未找到餐厅记录，获取当前附近餐厅！",
            checkgps: "请检查网络或GPS是否已启用",
            gpstimeout: "位置信息获取超时，返回主页！",
            caption_timeInfo: "获取餐厅信息...",
            caption_creatOrder: "正在加载...",
            shortMsg_guessBtn: "未找到餐厅记录",
            shortMsg_inputBtn: "未找到餐厅记录，请重新检索",
            insMsg_getData: "未检索到匹配结果",
            insMsg_errStore_103: "未获取到餐厅列表信息",
            insMsg_errStore_104: "获取餐厅信息异常",
            insMsg_errStore_401: "很抱歉，部分产品已超过供应/优惠时间，将自动从订单中删除。",
            insMsg_errStore_406: "很抱歉，取餐时间已失效，请重新点餐。",
            insMsg_errStore_407: "很抱歉，不在餐厅订餐时间内，请选择其他餐厅。",
            insMsg_errStore_443: "抱歉，该餐厅暂停营业，请选择其他餐厅。",
            insMsg_errStore_470: "抱歉，该餐厅尚未开始营业，请选择其他餐厅。",
            insMsg_errStore_471: "抱歉，该餐厅营业时间已结束，请选择其他餐厅。",
            insMsg_errStore_2: "很抱歉，系统暂时无法提供服务，敬请原谅。",
            tips_0: "抱歉，该餐厅{0}开始营业，请选择其他餐厅",
            tips_1: "抱歉，您选择的餐厅自助点餐服务时间为{0}-{1}。",
            tips_2: "抱歉，该餐厅已关店，请选择其他餐厅。",
            tips_3: "由于餐厅系统故障，请稍后再试。",
            tips_4: "抱歉，该餐厅暂停营业，请选择其他餐厅。"
        },
        order: {
            errorCodeMsg: {
                "-1": "操作失败，请重新尝试一次，\n如果网络不通畅，请稍后再试！",
                "2": "很抱歉，系统暂时无法提供服务，敬请原谅。",
                "201": "产品不可出售",
                "300": "订单不存在",
                "301": "产品数量超过最大值",
                "302": "产品不存在",
                "305": "优惠暂时不能使用，请稍后再试！",
                "306": "优惠暂时不能使用，请稍后再试！",
                "308": "必须给定B产品与数量",
                "311": "数据验证错误",
                "313": "餐厅不存在",
                "314": "优惠不合法",
                "321": "该优惠代码仅限注册用户使用哦",
                "400": "很抱歉，该部分产品已超过供应/优惠时间，将自动从订单中删除。",
                "401": "很抱歉，部分产品已超过供应/优惠时间，将自动从订单中删除。",
                "403": "购买产品失败，请检查您的网络",
                "406": "不在订餐时间内",
                "409": "产品不可超过最大可售份数。",
                "430": "订单金额错误。",
                "431": "订单项为空。",
                "434": "产品价格错误。",
                "436": "很抱歉，部分产品已超过供应/优惠时间，将自动从订单中删除。",
                "437": "很抱歉，该餐厅暂停营业，请您重新选择餐厅。",
                "443": "您所选的餐厅已暂停营业，请重新点餐。",
                "460": "抱歉，该餐厅已关店，请选择其他餐厅。",
                "465": "很抱歉，订餐预约时间已过。",
                "467": "该订单已支付，不可修改，请重新点餐!",
                "1012": "操作失败，请重新尝试一次，\n如果网络不通畅，请稍后再试！",
                "407": "不在餐厅订餐时间内",
                "invalidPhone": "请正确填写联系手机号码。",
                "empty": "您提交的订单不能为空，请先点餐。",
                "timeout": "很抱歉，部分产品已超过供应/优惠时间，将自动从订单中删除。",
                "default": "操作失败，请重新尝试一次，\n如果网络不通畅，请稍后再试！"
            }
        },
        app_tallyup: {
            back: "返回我的订单",
            pay: "正在提交订单,本操作可能耗时较长，请稍候...",
            error: "网络错误,将自动返回主页",
            errorTime: "不在订餐时间内",
            errorDate: "很抱歉，订餐预约时间已过。",
            errorCodeName: "很抱歉，该餐厅暂停营业，请您重新选择餐厅。",
            errorCodeDel: "很抱歉，该部分产品已超过供应/优惠时间，将自动从订单中删除。",
            errorCodeStop: "很抱歉，该餐厅暂停营业，请您重新选择餐厅。",
            promotionError: "您的订单中有超过售卖时间的餐点/优惠",
            timeExceed: "不在餐厅订餐时间内",
            tallyupErr: "请求支付信息失败",
            tallyupCont: "正在支付，请稍候..."
        },
        app_searchorder: {
            back: "返回主页",
            select: "正在获取订单信息，请稍候...",
            checkPhone: "查无结果或订单已过期。",
            searchErr: "很抱歉，系统暂时无法提供查询服务，敬请原谅。"
        },
        app_orderdetail: {
            back: "返回查询订单",
            obtainDetail: "请正确输入验证码！",
            orderCancel: "取消订单处理中...",
            obtainBy: "获取验证码...",
            orderErr: "请正确填写验证码。",
            cancelOrderErr: "取消订单失败！",
            subOrderErr: "取消订单短信发送过于频繁！",
            selectOrder: "正在查询订单...",
            cancelOrderSuc: "订单已取消！通常30天内退款至支付账户，请留意账户余额。",
            obtainErr: "该订单已不可取消，详情请参考订餐须知。",
            obtainTimeErr: "验证码已超时，请重新获取验证码!",
            codeErr: "验证码输入错误次数超过最大值。 ",
            orderSmsNumber: "单笔订单取消次数过多。"
        }
    };
    return A
});
