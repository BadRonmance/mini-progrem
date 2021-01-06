/*
 * @Description: 介绍
 * @version: 1.4.1
 * @Author: 张泽锋
 * @LastEditTime: 2020-11-23 15:55:10
 * @LastEditors: 张泽锋
 * @Date: 2020-11-23 11:00:34
 */ // 获取当前帐号信息
const accountInfo = wx.getAccountInfoSync();

// env类型
export const env = accountInfo.miniProgram.envVersion;

if (!env) {
      console.error("获取运行环境失败!");
}

const baseApi = {
      // 开发版
      develop: "http://192.168.108.236:8100/",
      // 体验版
      trial: "https://test.domain.cn",
      // 正式版
      release: "https://admin.domain.cn"
};
var siteInfo = {
      'siteroot': baseApi[env],
      'tabbar': [
            "pages/index/index",
            "pages/personal/index",
      ],
      'clientId': "f499ae8fb55286e22edb28ccff2ff79e" || "a6c4dc63ed734533b006e04e24020908", // !客户端id
      'Authorization': "Basic ZjQ5OWFlOGZiNTUyODZlMjJlZGIyOGNjZmYyZmY3OWU6MTExMTEx", // ! 客户端加密信息
      'codeData': {
            'news': {
                  'code': "winter-h5-news",
                  'desc': "首页新闻",
            },
            'sking': {
                  'code': "winter-h5-sking",
                  'desc': "首页滑雪",
            },
            'skating': {
                  'code': "winter-h5-skating",
                  'desc': "首页滑冰",
            },
            'education': {
                  'code': "winter-h5-education",
                  'desc': "首页冰雪教育资讯",
            },
            'banner': {
                  'code': "winter-h5-banner",
                  'desc': "首页banner",
            },
            'mallBanner': {
                  'code': "winter-h5-mall-banner",
                  'desc': "商城banner",
            },
            'new_good': {
                  'code': "new_good",
                  'desc': "商城分类",
            },
            'footBanner_link': {
                  'code': "winter-h5-bottom-link",
                  'desc': "底部导航  友情链接",
            },
            'footBanner_about': {
                  'code': "winter-h5-bottom-about",
                  'desc': "底部导航  关于我们",
            },
            'footBanner_code': {
                  'code': "winter-h5-bottom-qrcode",
                  'desc': "底部导航  二维码",
            },
            'footBanner_contact': {
                  'code': "winter-h5-bottom-contact",
                  'desc': "底部导航  联系我们",
            },
      }
}
module.exports = siteInfo;