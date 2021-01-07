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
        userBtnList: [{
            name: "身份认证",
            type: ['1', '2', '3', '4'],
            icon: ""
        }, {
            name: "我的证书",
            type: ['2', '3', '4'],
            icon: ""
        }, {
            name: "我的考级",
            type: ['4'],
            icon: ""
        }, {
            name: "我的培训",
            type: ['2', '3'],
            icon: ""
        }, {
            name: "归属机构",
            type: ['2', '3', '4'],
            icon: ""
        }, {
            name: "我的课程",
            type: ['1', '2', '3', '4', '5'],
            icon: ""
        }, {
            name: "机构成员",
            type: ['6', '2', '3'],
            icon: ""
        }, {
            name: "考级信息",
            type: ['6', '2', '3'],
            icon: ""
        }, {
            name: "缴费明细",
            type: ['1', '2', '3', '4', '5'],
            icon: ""
        }, {
            name: "我的授课",
            type: ['5'],
            icon: ""
        }, {
            name: "在线答疑",
            type: ['0', '1', '2', '3', '4', '5', '6'],
            icon: ""
        }, {
            name: "我的消息",
            type: ['0', '1', '2', '3', '4', '5', '6'],
            icon: ""
        }, {
            name: "设置",
            type: ['0', '1', '2', '3', '4', '5', '6'],
            icon: ""
        }],
        btnList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        let userType = 5
        let result = []
        this.data.userBtnList.map(item => {
            if (item.type.findIndex(val => val == userType) !== -1) {
                result.push(item)
            }
        })
        console.log(result)
        that.setData({
            btnList: result
        })
        setTimeout(() => {
            that.setData({
                show: true
            })
        }, 300)
    },
    toLogin() {
        wx.navigateTo({
            url: '/pages/login/index',
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