// components/infomation-list/index.js
const app = getApp()
Component({
      /**
       * 组件的属性列表
       */
      properties: {

      },

      /**
       * 组件的初始数据
       */
      data: {
            infomationList: []
      },
      created() {
            this.getData()
      },
      attached() {},
      /**
       * 组件的方法列表
       */
      methods: {
            refresh() {
                  this.setData({
                        infomationList: []
                  })
                  this.getData()
            },
            async getData() {
                  let data = await app.http({
                        url: `${wx.api.getContentList.request.url}/5/1`,
                        data: {
                              clientId: wx.config.clientId,
                              localtionShowStatus: true,
                              code: wx.util.clientCode("news"),
                              topStatus: null,
                              showStatus: true
                        },
                        method: "post"
                  })
                  if (data) {
                        this.setData({
                              infomationList: data.records
                        })
                  }
            },
      }
})