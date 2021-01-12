// components/form/upload/index.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            uploadData: {
                  type: Object,
                  value: {
                        maxLength: 3, //最大上传数量
                        maxSize: 100, // 单张最大上传大小
                        style: {
                              width: "",
                              height: ""
                        },
                        valueData: [{
                              type: "placeholder",
                              placeholder: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3683960634,3237104020&fm=26&gp=0.jpg",
                              value: ""
                        }, {
                              type: "placeholder",
                              placeholder: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3683960634,3237104020&fm=26&gp=0.jpg",
                              value: ""
                        }]
                  }
            },
      },

      /**
       * 组件的初始数据
       */
      data: {
            surplus: 1, //剩余上传数量
      },

      /**
       * 组件的方法列表
       */
      methods: {
            upload(e) {
                  let that = this
                  let Point = new wx.util.Point()
                  Point.start()
                  setTimeout(() => {
                        // Point.end()
                        Point.success()
                  }, 4000)
                  let index = e.currentTarget.dataset.index
                  wx.chooseImage({
                        count: 1,
                        sizeType: ['original', 'compressed'],
                        sourceType: ['album', 'camera'],
                        success(res) {
                              // tempFilePath可以作为img标签的src属性显示图片
                              const tempFilePaths = res.tempFilePaths
                              that.data.uploadData.valueData[index].type = 'value'
                              that.data.uploadData.valueData[index].value = tempFilePaths
                              that.setData({
                                    uploadData: that.data.uploadData
                              })
                        }
                  })
            }
      }
})