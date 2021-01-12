// pagesA/auth-center/mechanism/submit-info/index.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            bgImg: "http://jsl-xiehui.oss-cn-qingdao.aliyuncs.com/test/png/9c00654b-4a97-4ffe-8580-f7209bcc6802.png",
            labelStyle: {
                  "text-align": 'left',
                  width: "240rpx",
                  color: "#666",
                  "font-size": "30rpx",
            },
            placeholderStyle: {
                  color: "#8E8577",
                  "font-size": "28rpx"
            },
            formStyle: {
                  "border-bottom": "2rpx solid #E5E5E5",
                  padding: "50rpx 0 20rpx 0 !important"
            }, // form表单单条信息的css设置
            formData: [{
                  id: "1",
                  isRequire: true, // 是否必填
                  isDisabled: true, // 是否禁用
                  type: "input", // 表单类型
                  inputType: "text", // input type
                  prop: "userName", // 参数名称
                  label: "培训机构名称", // label名称
                  slot: "",
                  value: "", // 值
                  maxlength: "11", // 最大输入值 只在type为input类型时生效
                  placeholder: "请输入培训机构名称" // 提示信息
            }, {
                  id: "2",
                  isRequire: true,
                  isDisabled: false,
                  type: "area",
                  prop: "area",
                  label: "所在地",
                  value: [],
                  slot: "",
                  icon: {
                        labelIcon: {
                              isShow: false,
                              class: "",
                        },
                        contentIcon: {
                              isShow: true,
                              class: "iconfont iconyou1 fon_30 color_9"
                        }
                  },
                  maxlength: "11",
                  placeholder: "请选择所在地"
            }, {
                  id: "3",
                  isRequire: true,
                  isDisabled: false,
                  type: "input",
                  inputType: "text",
                  prop: "userName",
                  label: "详细地址",
                  value: "",
                  maxlength: "11",
                  placeholder: "请输入详细地址"
            }, {
                  id: "4",
                  isRequire: true,
                  isDisabled: false,
                  type: "input",
                  inputType: "text",
                  prop: "userName",
                  label: "企业邮箱",
                  value: "",
                  maxlength: "11",
                  placeholder: "请输入企业邮箱"
            }, {
                  id: "5",
                  isRequire: true,
                  isDisabled: false,
                  type: "input",
                  prop: "userName",
                  inputType: "number",
                  label: "联系方式",
                  value: "",
                  maxlength: "11",
                  placeholder: "请输入联系方式"
            }, {
                  id: "6",
                  isRequire: true,
                  isDisabled: false,
                  type: "input",
                  inputType: "text",
                  prop: "userName",
                  label: "法人姓名",
                  value: "",
                  maxlength: "11",
                  placeholder: "请输入法人姓名"
            }, {
                  id: "7",
                  isNotBorder: true,
                  isRequire: true,
                  isDisabled: false,
                  type: "upload",
                  prop: "userName",
                  label: "法人身份证",
                  value: "",
                  maxlength: "11",
                  placeholder: ""
            }],
            formValue: {}
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {

      },
      passValue(e) {
            console.log(e)
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