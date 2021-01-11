Component({
  data: {
    "imgConfig": wx.imgConfig.default,
    "selected": 0,
    "backgroundColor": "#101010",
    "color": "#fff",
    "selectedColor": "#E3BF68",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": wx.imgConfig.default.tabbar_home,
        "selectedIconPath": wx.imgConfig.default.tabbar_home,
        "text": "首页"
      },
      {
        "pagePath": "/pages/personal/index",
        "iconPath": wx.imgConfig.default.tabbar_person,
        "selectedIconPath": wx.imgConfig.default.tabbar_person,
        "text": "我的"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})