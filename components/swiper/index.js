// components/swiper/index.js
const app = getApp()
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            system: {
                  type: Object,
                  value: {
                        indicatorColor: "#e5e5e5",
                        indicatorActiveColor: "#fff",
                        indicatorDots: false,
                        vertical: false,
                        autoplay: false,
                        interval: 2000,
                        duration: 500,
                        code:"banner"
                  }
            },
            height: {
                  type: String,
                  valye: "420rpx"
            }
      },

      /**
       * 组件的初始数据
       */
      data: {
            swiperData: [{advertising:{ content: '../../assets/images/index/banner.png'}}]
      },
      created() {
            // this.getData()
      },
      /**
       * 组件的方法列表
       */
      methods: {
            refresh() {
                  this.setData({
                        swiperData: []
                  })
                  this.getData()
            },
            async getData() {
                  let data = await app.http({
                        url: `${wx.api.getAdvertList.request.url}/10/1`,
                        data: {
                              clientId: wx.config.clientId,
                              code: wx.util.clientCode(this.data.system.code)
                        },
                        method: "post"
                  })
                  if (data) {
                        this.setData({
                              swiperData: data.records
                        })
                  }
            },
      }
})