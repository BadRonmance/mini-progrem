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
            theme: "white"
        },
        labelStyle: {
            align: "t_c",
            width: "100rpx",
            placeholderColor: "#8E8577",
            contentColor: "color_f"
        },
        formStyle: {
            "border-bottom": "2rpx solid #8E8577",
            padding: "40rpx 0 30rpx 0"
        },
        bgImg: "http://jsl-xiehui.oss-cn-qingdao.aliyuncs.com/test/png/9c00654b-4a97-4ffe-8580-f7209bcc6802.png",
        formData: [{
            id: "1",
            isRequire: false,
            isDisabled: false,
            type: "input",
            inputType: "number",
            prop: "userName",
            labelIcon: true,
            label: "账号",
            icon: "iconfont iconzhanghao fon_40 color_f",
            value: "",
            maxlength: "11",
            placeholder: "请输入您的手机号"
        }, {
            id: "2",
            isRequire: false,
            isDisabled: false,
            type: "area",
            inputType: "text",
            prop: "userName1",
            labelIcon: true,
            maxlength: "11",
            icon: "iconfont iconmima fon_40 color_f",
            value: "",
            placeholder: "请输入您的密码"
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