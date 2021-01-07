// components/form/icon/index.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            name: {
                  type: String,
                  observer: function (val) {
                        this.setData({
                              isImageName: val.indexOf('/') !== -1,
                        });
                  },
            },
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