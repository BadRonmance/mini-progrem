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
        noIcon: true
      }
    },
    value:{
      type: Object,
      value: {
        address: {
          label: '北京市',val: '110100'
        },
        level: {
          label: 'mini一级',val: '1'
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // currentCity: app.globalData.currentCity,
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
    // levelText: 'mini一级',
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
        'value.address.label': city,
        'value.address.val': data.detail[1].code,
        positionIcon: city==app.globalData.currentCity?'block':'none'
      });
      data.city = city;
      this.triggerEvent('confirm',data);
    },
    levelChange(e){
      let level = this.data.levelList.find(val=>val.value == e.detail.value?val:'')
      this.setData({
        'value.level.label': level.label,
        'value.level.val': level.value
      });
      e.detail.label = level.label;
      this.triggerEvent('levelChange',e.detail);
    }
  }
})
