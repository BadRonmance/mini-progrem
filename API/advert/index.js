const MOUDLE_NAME = 'zuul/gp-center-resource/resource/advertising/anonymity'
/*
 ! 条件分页查询广告位置  即轮播图
*/
const getAdvertList = {
      "description": "条件分页查询广告位置  即轮播图",
      "request": {
            "method": "post",
            "url": `${MOUDLE_NAME}/page`
      },
      "params": {
            "pageSize": "分页器大小",
            "pageNum": "分页数目",
            "locationId": "广告位分类主键",
            "title": "广告内容标题",
            "type": "广告类型(0图片,1视频,详见枚举)",
            "showStatus": "是否显示(1是,0否)"
      },
      "response": []
}
export default {
      getAdvertList
}