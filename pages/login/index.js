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
            padding: "70rpx 0 40rpx 0"
        }, // form表单单条信息的css设置
        bgImg: "http://jsl-xiehui.oss-cn-qingdao.aliyuncs.com/test/png/9c00654b-4a97-4ffe-8580-f7209bcc6802.png",
        formData: [{
            id: "1",
            isRequire: false,  // 是否必填
            isDisabled: false, // 是否禁用
            type: "input", // 表单类型
            inputType: "number", // input type
            prop: "userName", // 参数名称
            labelIcon: true, // 是否以icon替代label
            label: "账号", // label名称
            icon: "iconfont iconzhanghao1 fon_40 color_f", // icon css
            value: "", // 值
            slot: "icon", // slot  name
            maxlength: "11", // 最大输入值 只在type为input类型时生效
            placeholder: "请输入您的手机号" // 提示信息
        }, {
            id: "2",
            isRequire: false,
            isDisabled: false,
            type: "input",
            inputType: "password",
            prop: "userName1",
            labelIcon: true,
            maxlength: "11",
            slot: "icon1", // slot  name
            icon: "iconfont iconmima fon_40 color_f",
            value: "",
            placeholder: "填写密码.6-16位数字字母任意两项组成"
        }],
        formValue: {}
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    change(e) {
        console.log(e)
    },
    /**
     * @description: 接受form组件传递过来的参数集合
     * @version: 1.6.0
     * @param {*} e
     * @return {*}
     * @author: 张泽锋
     * @Date: 2021-01-08 14:46:22
     */
    passValue(e) {
        this.setData({
            formValue: e.detail
        })
    },
    /**
     * @description: 切换输入密码展示方式
     * @version: 1.6.0
     * @param {*} e
     * @return {*}
     * @author: 张泽锋
     * @Date: 2021-01-08 14:40:00
     */
    changePWtype(e) {
        this.data.formData.map(item => {
            item.value = this.data.formValue[item.prop] || ''
        })
        this.data.formData[1].inputType = this.data.formData[1].inputType === 'text' ? 'password' : 'text'
        this.setData({
            formData: this.data.formData
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    }
})