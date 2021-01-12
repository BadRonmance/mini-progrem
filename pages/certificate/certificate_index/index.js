const app = getApp();
Page({
      /**
       * 页面的初始数据
       */
      data: {
            navbarHeight: app.globalData.customHeight + 'px',
            imgConfig: wx.imgConfig.default,
            // style: {
            //       lineText: "证书查询",
            //       background: "",
            //       textColor: "#fff",
            //       theme: "white"
            // },
            labelStyle: {
                  align: "t_c",
                  width: "100rpx",
                  placeholderColor: '#fff',
                  contentColor: "color_f"
            },
            formStyle: {
                  "border-bottom": "2rpx solid #E3BF68",
                  "padding": "150rpx 0rpx 26rpx 0rpx",
                  "font-size": '26rpx'
            }, // form表单单条信息的css设置
            bgImg: "http://jsl-xiehui.oss-cn-qingdao.aliyuncs.com/test/png/9c00654b-4a97-4ffe-8580-f7209bcc6802.png",
            formData: [{
                  id: "1",
                  isRequire: false, // 是否必填
                  isDisabled: false, // 是否禁用
                  type: "input", // 表单类型
                  inputType: "number", // input type
                  prop: "userName", // 参数名称
                  labelIcon: true, // 是否以icon替代label
                  label: "证书", // label名称
                  icon: "iconfont iconzhanghao1 fon_36 color_f", // icon css
                  value: "", // 值
                  placeholder: "输入姓名/身份证号/平台ID" // 提示信息
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
      // 接受form组件传递过来的参数集合
      passValue(e) {
            this.setData({
                  formValue: e.detail
            })
      },
      // 点击查询跳转
      query_cerFun() {
            wx.navigateTo({
               url: '../../certificate/certificate_query/index',
            })
      },

      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {

      }
})