const app = getApp();
Page({
      /**
       * 页面的初始数据
       */
      data: {
            navbarHeight: app.globalData.customHeight + 'px',
            payTypes: 'weixin',
            imgConfig: wx.imgConfig.default,

      },
      // 付款
      paynowFun() {
            // 付款成功之后跳转到这个页面
            wx.navigateTo({
                  url: '../../info-tips/index?title=提交成功&&subtitle=审核详情及缴费可在 我的-我的考级中心 中查看&&showBtn=true&&btnText=返回考级详情&&btnLink=../exam/exam_detail/index&&headerTitle=考级报名'
            })
      },
      // 切换付款方式
      payTypeFun(e) {
            console.log(e.currentTarget.dataset['type'])
            this.setData({
                  payTypes: e.currentTarget.dataset['type']
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