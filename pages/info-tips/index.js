const app = getApp();
Page({
      /**
       * 页面的初始数据
       */
      data: {
            imgConfig: wx.imgConfig.default,
            title: '',//标题
            subtitle: '',//副标题
            showBtn: true,//按钮是否显示
            btnText: '', //按钮文字
            btnLink: '', //按钮链接
      },
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            // 设置导航标题
            wx.setNavigationBarTitle({ title:options.headerTitle})
            this.setData({
                title:options.title,
                subtitle:options.subtitle,
                showBtn:options.showBtn,
                btnText: options.btnText,
                btnLink: options.btnLink
            })
      },
      // 按钮跳转
      jumpBtn(){
            wx.navigateTo({
              url: this.data.btnLink,
            })
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