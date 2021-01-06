const MOUDLE_NAME = 'zuul/gp-center-resource/resource/content/anonymity'
/*
 ! 条件分页查询信息列表
*/
const getContentList = {
      "description": "条件分页查询信息列表",
      "request": {
            "method": "post",
            "url": `${MOUDLE_NAME}/page`
      },
      "params": {
            "clientId": "客户端ID（为空时contentLocationCode不能为空）",
            "contentLocationCode": "信息位置代码（为空时clientId不能为空）",
            "contentName": "信息标题（模糊，可不填）",
            "topStatus": "是否置顶(true是,false否，可不填)",
            "showStatus": '是否展示'
      },
      "response": []
}
/*
 ! 条件分页查询信息单个详情
*/
const getNewInfo = {
      "description": "条件分页查询信息单个详情",
      "request": {
            "method": "post",
            "url": `${MOUDLE_NAME}`
      },
      "params": {
            "id": "主键id"
      },
      "response": []
}
export default {
      getContentList,
      getNewInfo
}