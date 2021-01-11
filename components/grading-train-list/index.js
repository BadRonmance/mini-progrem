// components/grading-train-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type: Object,
      value:{
        list: [],
        isTrain: false
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpDetail(e){
      wx.navigateTo({
        url: 'url'+e.currentTarget.dataset.id,
      })
    }
  }
})
