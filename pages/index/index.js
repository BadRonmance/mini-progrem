const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentCity: app.globalData.currentCity,
        style: {
            background: "#070707",
            lineText: "FIBR中国数字化平台",
            textColor: "#fff"
        },
        titleHeight: app.globalData.customHeight+'px',
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
        levelTitle: {
            leftText: ["考级"],
            showMore: true,
            path: "",
        },
        trainTitle:{
            leftText: ["培训"],
            showMore: true,
            path: "",
            tip: '当前城市暂无培训'
        },
        classTitle: {
            defaultIndex: 0,
            leftText: ["云客互联","名帅视界"],
            showMore: true,
            path: "",
        },
        newsTitle:{
            leftText: ["热点资讯"],
            showMore: true,
            path: "/pages/news/index",
        },
        levelExaminateData:{
            list: [
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
            ],
            imgsrc: '/assets/images/index/levelBagk.png'
        },
        trainData:{
            list: [
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
            ],
            imgsrc: '/assets/images/index/trainBagk.png'
        },
        videoClassList: [
            {
                id: '1',name: '世界篮球教练协会教练',look:'210',price:'750',isFree:false,src:'../../assets/images/index/class.png'
            },
            {
                id: '21',name: '世界篮球教练协会教练高级 精品优质课程',look:'210',price:'750',isFree:true,src:'../../assets/images/index/class.png'
            },
            {
                id: '3',name: '世界篮球教练协会教练高级 精品优质课程x嘻嘻嘻嘻嘻嘻嘻嘻寻',look:'210',price:'750',isFree:true,src:'../../assets/images/index/class.png'
            },
        ],
        classStyle: {
            width: '330rpx',
            marginRight: '18rpx'
        },
        newsList: [
            {
                id: '1',type:'news',title: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',num:100,time: '2021-1-8',src:'../../assets/images/index/news.png'
            },
            {
                id: '2',type:'news',title: '国际篮联欧洲委员会批准2020-21年欧洲女足赛季的格反反复复付付付',num:100,time: '2021-1-8',src:'../../assets/images/index/news.png'
            },
            {
                id: '3',type:'news',title: '国际篮联欧洲委员会批准',num:100,time: '2021-1-8',src:'../../assets/images/index/news.png'
            },
            {
                id: '4',type:'advent',title: '国际篮联欧洲委员会批准',src:'../../assets/images/index/news.png'
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
    titleChange(data){
        console.log(data.detail)
    },
    //关闭广告
    closeAdvent(data){
        this.data.newsList.splice(data.detail,1)
        this.setData({
            newsList: this.data.newsList
        })
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