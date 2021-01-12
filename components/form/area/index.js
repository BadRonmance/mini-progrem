// components/form/area/index.js
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
            placeholderStyle: {
                  type: String,
                  value: ''
            },
            data: {
                  type: Object,
                  value: {},
                  observer: function (val) {
                        let result = []
                        val.value.map(item => {
                              result.push(item.name)
                        })
                        this.setData({
                              areaValue: result.join(" ")
                        });
                  },
            },
      },

      /**
       * 组件的初始数据
       */
      data: {
            isShow: false,
            areaValue: "",
            pickerArea: false
      },

      /**
       * 组件的方法列表
       */
      methods: {
            confirm(e) {
                  let result = []
                  e.detail.map(item => {
                        result.push(item.name)
                  })
                  this.setData({
                        areaValue: result.join(" ")
                  })
                  this.triggerEvent("changeValue", {
                        prop: this.data.data.prop,
                        value: e.detail
                  })
                  this.cancel()
            },
            cancel() {
                  this.setData({
                        isShow: false
                  })
            },
            bindArea() {
                  if (this.data.data.isDisabled === null) return
                  if (this.data.data.isDisabled) return
                  this.setData({
                        isShow: true,
                        pickerArea: true
                  })
            },
      }
})