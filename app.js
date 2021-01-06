const siteroot = require('./siteinfo.js').siteroot;
var QQMapWX = require('./utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
App({
    onLaunch: function () {
        let that = this
        this.autoUpdate()
        let capsuleObj = wx.getMenuButtonBoundingClientRect();
        wx.getSystemInfo({
            success: (result) => {
                that.globalData.height = capsuleObj.height + (capsuleObj.top - result.statusBarHeight) * 2
                that.globalData.statusBarHeight = result.statusBarHeight
                that.globalData.customHeight = that.globalData.height + result.statusBarHeight
            },
        })
        wx.config = require('./siteinfo.js')
        wx.util = require('./utils/util.js')
        wx.api = require('./API/index.js').default
    },
    /**
     * 用户登录
     */
    appLogin(callback) {
        wx.login({
            success: res => {
                wx.request({
                    url: siteroot + '/api/v1/yh/auth/autoLoginByCode',
                    method: "post",
                    data: {
                        code: res.code
                    },
                    header: {
                        "Content-Type": "application/json"
                    },
                    success(res) {
                        callback(res.data)
                    }
                })
            }
        })
    },
    onShow(){
        // qqmapsdk = new QQMapWX({
        //     key: 'GWGBZ-S3PHW-YOQRW-OEEQF-CA5C5-DJB64' //这里自己的key秘钥进行填充
        // });      
        // this.getUserLocation();
    },
    /**
     * 获取用户信息
     */
    getUserLocation(){
        var that = this;
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
                wx.openSetting({
                    success: (dataAu) => {
                        if (dataAu.authSetting["scope.userLocation"] == true) {
                            that.toast('授权成功');
                        } else {
                            that.toast('授权失败');
                            that._getCityLocation()
                        }
                    },
                    fail: (error) => {
                        that._getCityLocation()
                    }
                })
            } else {
                that._getCityLocation()
            }
          },
          fail: (error) => {
            // console.log(error)
            that._getCityLocation()
          }
        })
    },
    _getCityLocation(){
        var that = this;
        wx.getLocation({
          type: 'wgx84',
          success: (res) => {
            qqmapsdk.reverseGeocoder({
                location: {
                    latitude: res.latitude,
                    longitude: res.longitude
                },
                success: function (res) {
                    console.log(res.result.ad_info.city)
                    that.globalData.city = res.result.ad_info.city;
                },
                fail: function (res) {
                    // console.log(res);
                }
            })
          },
          fail: (error) => {
            //   console.log(error)
            that.toast('获取失败,用户取消')
          }
        })
    },
    /**
     * 封装http 请求方法
     */
    http(params = {}) {
        params.header = params.header || {}
        params.header.token = wx.getStorageSync('userLogin').token
        //返回promise 对象
        return new Promise((resolve, reject) => {
            wx.request({
                url: siteroot + params.url, //服务器url+参数中携带的接口具体地址
                data: params.data, //请求参数
                header: {
                    "clientId": wx.config.clientId,
                    "Authorization": wx.config.Authorization,
                },
                method: params.method || 'POST', //默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
                dataType: params.dataType, //返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数
                responseType: params.responseType, //响应的数据类型
                success: function (res) {
                    //接口访问正常返回数据
                    if (res.statusCode == 200) {
                        //1. 操作成功返回数据,原则上只针对服务器端返回成功的状态（如本例中为000000）
                        if (res.data.status !== 200) {
                            wx.showToast({
                                icon: "none",
                                title: res.data.msg
                            })
                            resolve(false)
                        } else {
                            resolve(res.data.data)
                        }
                    } else {
                        //2. 操作不成功返回数据，以toast方式弹出响应信息，如后端未格式化非操作成功异常信息，则可以统一定义异常提示
                        wx.showToast({
                            icon: "none",
                            title: "网络错误"
                        })
                    }
                },
                fail: function (e) {
                    wx.showToast({
                        icon: "none",
                        title: "网络错误"
                    })
                    reject(e)
                }
            })
        })
    },
    /**
     * 封装wx.showToast
     */
    toast(e, type = 0) {
        wx.showToast({
            icon: "none",
            title: e
        })
        if (type == -1) {
            setTimeout(() => {
                wx.navigateBack({
                    delta: 1
                })
            }, 2000)
        }
    },
    /**
     * 小程序更新
     */
    autoUpdate: function () {
        var self = this
        // 获取小程序更新机制兼容
        if (wx.canIUse('getUpdateManager')) {
            const updateManager = wx.getUpdateManager()
            //1. 检查小程序是否有新版本发布
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                if (res.hasUpdate) {
                    //2. 小程序有新版本，则静默下载新版本，做好更新准备
                    updateManager.onUpdateReady(function () {
                        wx.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success: function (res) {
                                if (res.confirm) {
                                    //3. 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                    updateManager.applyUpdate()
                                } else if (res.cancel) {
                                    //如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
                                    wx.showModal({
                                        title: '温馨提示~',
                                        content: '本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~',
                                        success: function (res) {
                                            self.autoUpdate()
                                            return;
                                            //第二次提示后，强制更新                      
                                            if (res.confirm) {
                                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                                updateManager.applyUpdate()
                                            } else if (res.cancel) {
                                                //重新回到版本更新提示
                                                self.autoUpdate()
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    })
                    updateManager.onUpdateFailed(function () {
                        // 新的版本下载失败
                        wx.showModal({
                            title: '已经有新版本了哟~',
                            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
                        })
                    })
                }
            })
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
    },
    /**
     * 动态更改导航栏内容
     */
    setNavigationBarTitle(e) {
        wx.setNavigationBarTitle({
            title: e
        })
    },
    /**
     * 动态更改导航栏颜色
     */
    setNavigationBarColor(titleColor, background) {
        wx.setNavigationBarColor({
            frontColor: titleColor,
            backgroundColor: background,
        })
    },
    globalData: {
        height: 0
    }
})