// components/form/label/index.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            labelStyle: {
                  type: Object,
                  observer: function (val) {
                        this.setData({
                              labelStyleValue: wx.util.convertStyle(val)
                        });
                  },
            },
            isRequire: {
                  type: Boolean,
                  type: false
            },
            label: {
                  type: String,
                  type: ''
            },
            icon: {
                  type: Object,
                  type: ''
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