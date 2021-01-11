// components/view-title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    system:{
      type: Object,
      value: {
        defaultIndex: 0,
        leftText: ["云客互联","名帅视界"],
        showMore: false,
        path: "",
        tip: '当前城市暂无培训'
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    imgConfig: wx.imgConfig.default,
    inteStyle: "",
    activeIndex: 0,
    defaultClass: "fon_30 color_9 fon_wei",
    activeClass: "color_10 fon_38 fon_wei",
    labelText: []
  },
  attached(){
    let arr = [];
    for(let item of this.data.system.leftText){
      arr.push([item.slice(0, 1),item.slice(1, item.length)]);
    }
    this.setData({
      labelText: arr
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpPage(e){
      wx.navigateTo({
        url: e.currentTarget.dataset.path,
      })
    },
    change(e) {
      this.setData({
        activeIndex: e.currentTarget.dataset.index
      });
      this.triggerEvent('change',e.currentTarget.dataset.index);
    }
  }
})
