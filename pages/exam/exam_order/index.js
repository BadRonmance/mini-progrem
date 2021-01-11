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
            signInfo:[
                  {
                        label:"姓名",
                        value:'王飞飞',
                  },
                  {
                        label:"身份证",
                        value:'612723199710236589'
                  },
                  {
                        label:"联系方式",
                        value:'15126589765'
                  },
                  {
                        label:"邮箱",
                        value:'7812589634@qq.com'
                  },
                  {
                        label:"推荐人",
                        value:'王美丽'
                  }
            ]
           
      },
      // 生成订单
      producet_order(){
            wx.navigateTo({
              url: '../../exam/exam_pay/index',
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