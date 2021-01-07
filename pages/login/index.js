// pages/login/index.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        navbarHeight: app.globalData.customHeight + 'px',
        style: {
            lineText: "FIBR中国数字平台",
            background: "",
            textColor: "#fff",
            theme:"white"
        },
        bgImg: "http://jsl-xiehui.oss-cn-qingdao.aliyuncs.com/test/png/9c00654b-4a97-4ffe-8580-f7209bcc6802.png",
        formData: [{
            id: "1",
            isRequire: true,
            isDisabled: false,
            type: "input",
            prop: "userName",
            labelIcon: true,
            label: "iconfont iconzhanghao fon_40 color_f",
            icon: "iconfont iconzhanghao",
            value: "",
            placeholder: "这是提示"
        }, {
            id: "2",
            isRequire: false,
            isDisabled: false,
            type: "input",
            prop: "userName1",
            labelIcon: true,
            label: "iconfont iconmima fon_40 color_f",
            value: "",
            placeholder: "这是提示"
        }],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    formSubmit(e) {
        console.log(e)
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    }
})