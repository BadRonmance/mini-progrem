Component({
  data: {
    "selected": 0,
    "backgroundColor": "#101010",
    "color": "#fff",
    "selectedColor": "#E3BF68",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/images/tabbar/home-n.png",
        "selectedIconPath": "/assets/images/tabbar/home-l.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/personal/index",
        "iconPath": "/assets/images/tabbar/member-n.png",
        "selectedIconPath": "/assets/images/tabbar/member-l.png",
        "text": "我的"
      }
    ]
  },
  attached() {
    console.log("11111111")
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})