const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        style: {
            background: "transparent",
            lineText: "FIBR中国数字化平台",
            textColor: "#fff"
        },
        titleHeight: (app.globalData.height+app.globalData.statusBarHeight+10)+'px',
        banner: {
            height: '140px',
            system: {
                indicatorColor: "#e5e5e5",
                indicatorActiveColor: "#fff",
                indicatorDots: true,
                vertical: false,
                autoplay: false,
                interval: 2000,
                duration: 500,
                code: "banner",
            }
        },
        navData: [
            {src: '../../assets/images/index/nav-levelExaminate.png',title: '运动员考级',path: '1'},
            {src: '../../assets/images/index/nav-train.png',title: '教练/推广员培训',path: '2'},
            {src: '../../assets/images/index/nav-onlineClass.png',title: '线上课程',path: '3'},
        ],
        levelExaminateList: [
            {
                id: '1',city:'北京',name: 'MINI级运动员考级',time: '2020.12.14~2020.12.20'
            },
            {
                id: '21',city:'北京',name: 'MINI级运动员考级',time: '2020.12.14~2020.12.20'
            },
            {
                id: '3',city:'北京',name: 'MINI级运动员考级',time: '2020.12.14~2020.12.20'
            },
            {
                id: '4',city:'北京',name: 'MINI级运动员考级',time: '2020.12.14~2020.12.20'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const bankAccount = {
            balance: 2020,
            name: 'Georgy Glezer'
        };
        const handler = {
            get: (target, prop, receiver) => {
                if (prop === 'balance') {
                    console.log(`Current Balance Of: ${target.name} Is: ${target.balance} `);
                }
                return target[prop]
            }
        }
        const wrappedBankAcount = new Proxy(
            bankAccount,
            handler
        );
        wrappedBankAcount.balance
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    // 跳转
    jumpPath(e){
        console.log(e.currentTarget.dataset.path);
        // wx.navigateTo({
        //   url: '/pages/news/index',
        // })
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})