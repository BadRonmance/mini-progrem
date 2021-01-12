// pages/train-list/indx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgConfig: wx.imgConfig.default,
    tabbarList: {
      leftText: ["教练员培训","推广员培训"],
      icon: [
        {
          src: wx.imgConfig.default.train_coach,
          selectsrc: wx.imgConfig.default.train_coachActive
        },{
          src: wx.imgConfig.default.train_extension,
          selectsrc: wx.imgConfig.default.train_extensionActive
        }
      ],
      showMore: false,
      path: "",
    },
    activeIndex: 0,
    bigChoiceSystem: {
      width: '100%',
      background: '#F5F5F5',
      noIcon: true
    },
    choiceSystem:{
      width: '260rpx',
      background: '',
      noIcon: false
    },
    isShowTwo: false,
    chioceValue: {
      address: {
        label: '北京',val: '110100'
      },
      level: {
        label: 'mini一级',val: '1'
      }
    },
    trainData: {
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
        {
          id: '4',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },
        {
          id: '5',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },
        {
          id: '6',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },{
          id: '7',
          name: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',
          price: 100,
          bao: '2020.12.16 09:00 ~ 2021.12.22 09:00',
          kao: "2021.02.19~2021.02.22",
          src: wx.imgConfig.default.home_apiNews
        },
      ],
      isTrain: true
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
    this.setData({
      'chioceValue.address.label': data.detail.city,
      'chioceValue.address.val': data.detail.detail[1].code
    });
  },
  levelChange(data){
    console.log(data.detail);
    this.setData({
      'chioceValue.level.label': data.detail.label,
      'chioceValue.level.val': data.detail.value
    });
  },
  tabbarChange(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      activeIndex: index
    });
  },
  onPageScroll: function(e){
    this.setData({
      isShowTwo: e.scrollTop > 0 ? true : false
    });
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