// components/custom-header/index.js
const app = getApp()
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            style: {
                  type: Object,
                  value: {
                        background: "#fff",
                        lineText: "首页",
                        textColor: "#fff"
                  }
            }
      },

      /**
       * 组件的初始数据
       */
      data: {
            height: app.globalData.height + 'px',
            statusBarHeight: app.globalData.statusBarHeight + 'px',
            textAlign: wx.getSystemInfoSync().system.indexOf("iOS") !== -1 ? 't_c' : 't_l',
            navbarType: {
                  type: "0",
                  iconList: [
                        "",
                        "../../assets/images/icon/back-home.png",
                        "../../assets/images/icon/back.png",
                  ]
            },
            navbarTypeWhite: {
                  type: "0",
                  iconList: [
                        "",
                        "../../assets/images/icon/back_white.png",
                        "../../assets/images/icon/back_white.png"
                  ]
            }
      },
      created() {
            this.setHeight()
      },
      attached() {
            this.data.navbarType.type = wx.util.pageTest().type
            this.setData({
                  navbarType: this.data.navbarType
            })
      },
      /**
       * 组件的方法列表
       */
      methods: {
            setHeight() {
                  this.setData({
                        height: app.globalData.height + 'px'
                  })
            },
            navbarPage() {
                  let type = this.data.navbarType.type
                  type == 1 ? wx.switchTab({
                        url: '/pages/index/index',
                  }) : type == 2 ? wx.navigateBack({
                        delta: 1,
                  }) : ''
            }
      }
})