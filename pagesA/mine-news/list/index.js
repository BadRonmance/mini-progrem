// pagesA/mine-news/index.js
const app = getApp()
Page({

      /**
       * 页面的初始数据
       */
      data: {
            newsList: [{
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-11 15:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-11 14:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-11 13:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-11 12:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-11 11:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-02 15:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2021-01-01 15:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2020-12-20 15:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2020-12-10 15:23"
            }, {
                  title: "XXXXX培训机构XXXXX培最新通知XXXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知XXXX培训机构XXXXX培最新通知",
                  time: "2020-12-01 15:23"
            }]
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            this.reckonTime()
      },
      reckonTime() {
            this.data.newsList.map(item => {
                  item.CNtime = wx.util.commentTimeHandle(item.time)
            })
            this.setData({
                  newsList: this.data.newsList
            })
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