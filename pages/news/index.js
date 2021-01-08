// pages/news/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let newsList = [
      {'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},
      {'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'},{'title':'新闻资讯'}
    ];
    let advertList = [
      {'title':'广告1',id:'a1'},{'title':'广告2',id:'a1'},{'title':'广告3',id:'a1'},{'title':'广告4',id:'a1'},{'title':'广告5',id:'a1'}
    ];
    newsList.map(item=>{
      item.type = 'news';
      item.num = 100;
      item.time = '2021-1-8';
      item.src ="../../assets/images/index/news.png";
      return item;
    });
    advertList.map(item=>{
      item.type = 'advent';
      item.src ="../../assets/images/index/news.png";
      return item;
    });
    let len = Math.ceil((newsList.length) / 7);
    for(let i=0;i<advertList.length;i++){
      newsList.splice(7*(i+1)+i,0,advertList[i]);
    }
    this.setData({
      list: newsList
    });
  },
  // 关闭广告
  closeAdvent(data){
    this.data.list.splice(data.detail,1)
    this.setData({
      list: this.data.list
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上啦')
  }
})