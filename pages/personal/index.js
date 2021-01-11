// pages/personal/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbarHeight: app.globalData.customHeight + 'px',
        style: {
            lineText: "FIBR中国数字平台",
            background: "#101010",
            textColor: "#fff"
        },
        show: false,
        btnList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        let userType = 1
        let result = []
        wx.JsonData.personal_UserBtnList.map(item => {
            if (item.type.findIndex(val => val == userType) !== -1) {
                result.push(item)
            }
        })
        that.setData({
            btnList: result
        })
        setTimeout(() => {
            that.setData({
                show: true
            })
        }, 300)
    },
    itemRouter(e) {
        let path = e.currentTarget.dataset.path
        if (!path) return
        if (path === '') return
        console.log(wx.util.dataType(path) === 'Object')
        if (wx.util.dataType(path) === 'String') {
            wx.navigateTo({
                url: path,
            })
        }
        if (wx.util.dataType(path) === 'Object') {
            console.log(path['default'])
            wx.navigateTo({
                url: path['default'],
            })
        }

    },
    toLogin() {
        wx.navigateTo({
            url: '/pages/login/sign-in/index',
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})