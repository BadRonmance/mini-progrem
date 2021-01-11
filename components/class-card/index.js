// components/class-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classList: {
      type: Array,
      value: [
        {
          id: '1',name: '世界篮球教练协会教练高级 精品优质课程',look:'210',price:'750',isFree:true,img:'../../assets/images/index/class.png'
        }
      ]
    },
    style: {
      type: Object,
      value: {
        width: '316rpx'
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

  }
})
