// pagesA/auth-center/mechanism/submit-info/index.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            labelStyle: {
                  align: "t_l",
                  width: "240rpx",
                  placeholderColor: "#8E8577",
                  contentColor: "color_3"
            },
            formStyle: {
                  "border-bottom": "2rpx solid #E5E5E5",
                  padding: "70rpx 0 20rpx 0"
            }, // form表单单条信息的css设置
            bgImg: "http://jsl-xiehui.oss-cn-qingdao.aliyuncs.com/test/png/9c00654b-4a97-4ffe-8580-f7209bcc6802.png",
            formData: [{
                  id: "1",
                  isRequire: true, // 是否必填
                  isDisabled: false, // 是否禁用
                  type: "input", // 表单类型
                  inputType: "number", // input type
                  prop: "userName", // 参数名称
                  label: "培训机构名称", // label名称
                  value: "某某某超高级牛的机构", // 值
                  maxlength: "11", // 最大输入值 只在type为input类型时生效
                  placeholder: "请填写您的手机号" // 提示信息
            }, {
                  id: "2",
                  isRequire: true,
                  isDisabled: false,
                  type: "area",
                  prop: "userName",
                  label: "所在地",
                  value: "某某某超高级牛的机构",
                  maxlength: "11",
                  placeholder: "请填写您的手机号"
            }, {
                  id: "3",
                  isRequire: true,
                  isDisabled: false,
                  type: "input",
                  prop: "userName",
                  label: "详细地址",
                  value: "某某某超高级牛的机构",
                  maxlength: "11",
                  placeholder: "请填写您的手机号"
            }],
            formValue: {}
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {

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