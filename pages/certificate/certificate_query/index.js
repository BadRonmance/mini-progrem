const app = getApp();
Page({
      /**
       * 页面的初始数据
       */
      data: {
            navbarHeight: app.globalData.customHeight + 'px',
            searchSet:{
                  placeholderText:'输入姓名/身份证号/平台ID' 
            },
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