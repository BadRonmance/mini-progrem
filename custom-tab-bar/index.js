Component({
  data: {
    "selected": 0,
    "backgroundColor": "#101010",
    "color": "#fff",
    "selectedColor": "#E3BF68",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/images/tabbar/index.png",
        "selectedIconPath": "/assets/images/tabbar/index.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/personal/index",
        "iconPath": "/assets/images/tabbar/person.png",
        "selectedIconPath": "/assets/images/tabbar/person.png",
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