// pages/index/card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type: Object,
      value: {
        list: [],
        imgsrc: ''
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgConfig: wx.imgConfig.default,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
