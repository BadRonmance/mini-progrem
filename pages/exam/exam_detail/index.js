const app = getApp();
Page({
      /**
       * 页面的初始数据
       */
      data: {
            navbarHeight: app.globalData.customHeight + 'px',
            banner: {
                  height: '422rpx',
                  system: {
                        indicatorColor: "#e5e5e5",
                        indicatorActiveColor: "#fff",
                        indicatorDots: true,
                        vertical: false,
                        autoplay: false,
                        interval: 2000,
                        duration: 500,
                        code: "banner",
                  }
            },
      },
      // 报名
      signUpFun() {
            wx.navigateTo({
                  url: '../../exam/exam_order/index',
            })
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
       * 生命周期函数--监听页面显示
       */
      onShow: function () {

      }
})