const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbarHeight: app.globalData.customHeight + 'px',
        active: 1,
        loading: true,
        scrollTopShow: false,
        loading: true,
        pageData: [{
            type: "compontent",
            name: "swiper",
            id: "swiper",
            height: "145px",
            system: {
                indicatorColor: "#e5e5e5",
                indicatorActiveColor: "#fff",
                indicatorDots: true,
                vertical: false,
                autoplay: false,
                interval: 2000,
                duration: 500,
                code: "banner",
            },
            style: "margin-bottom:20rpx",
            relation: {
                name: "infomationList",
                code: ""
            }
        },{
            type: "compontent",
            id: "ebringForm",
            name: "ebringForm",
        },  {
            type: "compontent",
            id: "infomationList",
            name: "infomationList",
        }, {
            type: "compontent",
            name: "scrollTop",
        }],
        formData: {
            data: [
                {
                    id: "1",
                    isRequire: true,
                    isDisabled: false,
                    type: "text",
                    prop: "nickname",
                    label: "昵称",
                    value: "2",
                    placeholder: "长度限制：2~10个字符",
                    lengthRule: '长度限制：2~10个字符',
                    ruleData: [
                        {
                            min: 2,
                            message: "最小输入2位"
                        },
            
                        {
                            max: 10,
                            message: "最大输入10位"
                        }
                    ],
                },
                {
                    id: "1",
                    isRequire: true,
                    isDisabled: false,
                    type: "password",
                    prop: "password",
                    label: "密码",
                    value: "",
                    placeholder: "请输入密码",
                    lengthRule: '长度限制：6~10个字符',
                    ruleData: [
                        {
                            min: 6,
                            message: "最小输入6位"
                        },
            
                        {
                            max: 10,
                            message: "最大输入10位"
                        }
                    ],
                },
                {
                    id: "5",
                    isRequire: true,
                    isDisabled: true,
                    type: "region",
                    prop: "region",
                    label: "地址",
                    value: ["河北省","石家庄市","长安区"],
                },
                {
                    id: "2",
                    isRequire: false,
                    isDisabled: false,
                    type: "radio",
                    prop: "realName",
                    label: "性别",
                    value: "1",
                    radioData: [{
                        label: "男",
                        value: '1',
                    }, {
                        label: "女",
                        value: '2',
                    }]
                },
                {
                    id: "2",
                    isRequire: false,
                    isDisabled: false,
                    type: "checkbox",
                    prop: "color",
                    label: "喜爱",
                    value: "",
                    radioData: [{
                        label: "红色",
                        value: 'red',
                    }, {
                        label: "蓝色",
                        value: 'blue',
                    }]
                },
            ],
            button: '提交'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(wx.api)
        console.log(wx.util.formatTime(new Date()));
    },

    onPageScroll: function (e) { // 获取滚动条当前位置
        if (this.data.pageData.findIndex(val => val.name === 'scrollTop') != -1 && e.scrollTop > 100) {
            this.setData({
                scrollTopShow: true
            })
        } else {
            this.setData({
                scrollTopShow: false
            })
        }
        // console.log(e)
    },
    formSubmit(e){
        console.log(e.detail)
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
        this.data.pageData.map(item => {
            if (item.id) {
                this.selectComponent(`#${item.id}`).refresh();
            }
        })
        wx.stopPullDownRefresh()
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