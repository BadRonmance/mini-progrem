const app = getApp();
Page({
      /**
       * 页面的初始数据
       */
      data: {
            navbarHeight: app.globalData.customHeight + 'px',

            labelStyle: {
                  align: "t_c",
                  width: "80rpx",
                  placeholderColor: '#999',
                  contentColor: "#333333"
            },
            formStyle: {
                  "border-bottom": "none",
                  "padding": "24rpx 0 24rpx 0rpx",
                  "font-size": '28rpx'

            }, // form表单单条信息的css设置
            formData: [{
                  id: "1",
                  isRequire: false, // 是否必填
                  isDisabled: false, // 是否禁用
                  type: "input", // 表单类型
                  inputType: "number", // input type
                  prop: "userName", // 参数名称
                  labelIcon: true, // 是否以icon替代label
                  label: "证书", // label名称
                  icon: "iconfont iconzhanghao1 fon_40 color_9", // icon css
                  value: "", // 值
                  placeholder: "输入姓名/身份证号/平台ID" // 提示信息
            }],
            formValue: {},
            personList: [{}, {}],
            showDetails: false
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
      // 点击显示详情信息
      showDetailInfo() {
            this.setData({
                  showDetails: !this.data.showDetails
            })
      },

      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {

      }
})