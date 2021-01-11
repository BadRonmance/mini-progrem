const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentCity: app.globalData.currentCity,
    gradingData: {
      list: [
        {
          id: '1',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },
        {
          id: '2',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },
        {
          id: '3',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },
      ],
      isTrain:false,
    }
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
  confirm(data){
    console.log(data.detail);
  },
  levelChange(data){
    console.log(data.detail);
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