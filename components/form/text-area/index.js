// components/form/text-area/index.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            labelStyle: {
                  type: Object,
                  value: {
                        align: "t_l",
                  }
            },
            data: {
                  type: Object,
                  value: {

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
            bindinput(e) {
                  this.triggerEvent("changeValue", {
                        prop: this.data.data.prop,
                        value: e.detail.value
                  })
            }
      }
})