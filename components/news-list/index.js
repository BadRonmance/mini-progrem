// components/news-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
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
    closeAdvent(e){
      this.triggerEvent('closeAdvent',e.currentTarget.dataset.index)
    },
    newsDetails(e){
      console.log(e.currentTarget.dataset.id);
      wx.navigateTo({
        url: '/pages/news-detail/index?id='+e.currentTarget.dataset.id,
      })
    }
  }
})
