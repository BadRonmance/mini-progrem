const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    choiceSystem:{
      type: Object,
      value: {
        width: '426rpx',
        background: '#F5F5F5',
        pa_l30: 'padding-left:30rpx',
        pa_l22: 'padding-left:22rpx',
        noIcon: true
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentCity: app.globalData.currentCity,
    imgConfig: wx.imgConfig.default,
    areaValue: '110100',
    positionIcon: 'block',
    showCity: 'none',
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '陕西省'
      },
      city_list: {
        110100: '北京市',
        120100: '西安市',
      },
      isnoCounty: true
    },
    showlevel: 'none',
    levelList: [
      {label: '默认等级',value: ''},
      {label: 'mini一级',value: '1'},
      {label: 'mini二级',value: '2'},
    ],
    index: 1,
    levelText: 'mini一级',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCityOpt(){
      this.setData({
        showCity: 'block'
      });
    },
    cancel(){
      this.setData({
        showCity: 'none'
      })
    },
    confirm(data){
      data.detail[0].name = data.detail[0].name.substring(0,data.detail[0].name.length-1);
      data.detail[1].name = data.detail[1].name.substring(0,data.detail[1].name.length-1);
      let city = data.detail[0].name == data.detail[1].name?data.detail[1].name: data.detail[0].name+' '+data.detail[1].name
      this.setData({
        showCity: 'none',
        currentCity: city,
        positionIcon: city==app.globalData.currentCity?'block':'none'
      });
      this.triggerEvent('confirm',data.detail);
    },
    levelChange(e){
      let level = this.data.levelList.find(val=>val.value == e.detail.value?val:'')
      this.setData({
        levelText: level.label
      });
      this.triggerEvent('levelChange',e.detail);
    }
  }
})
