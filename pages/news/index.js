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
    console.log('show');
    let newsList = [
      {'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},
      {'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'},{'name':'新闻资讯'}
    ];
    let advertList = [
      {'name':'广告1'},{'name':'广告2'},{'name':'广告3'},{'name':'广告4'},{'name':'广告5'}
    ];
    newsList.map(item=>{
      item.type = 'news';
      return item;
    });
    let len = Math.ceil((newsList.length) / 7);
    for(let i=0;i<advertList.length;i++){
      newsList.splice(7*(i+1)+i,0,advertList[i]);
    }
    this.setData({
      list: newsList
    })
    console.log(newsList)
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

  }
})