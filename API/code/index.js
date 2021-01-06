/*
 * @Description: 省市区
 * @Version: 1.0.0
 * @Author: 张泽锋
 * @LastEditors: Please set LastEditors
 * @Date: 2020-08-05 11:20:14
 */
const MOUDLE_NAME = 'zuul/gp-center-dict/dict'
/*
 ! 获取所有省
*/
const getProvinceName = {
      "description": "获取所有省",
      "request": {
            "method": "get",
            "url": `${MOUDLE_NAME}/province/all`
      },
      "params": {},
      "response": []
}
/*
 ! 根据省份代码查询对应省下所有市
*/
const getCityName = {
      "description": "根据省份代码查询对应省下所有市",
      "request": {
            "method": "get",
            "url": `${MOUDLE_NAME}/city`
      },
      "params": {
            "provinceCode": "省份代码"
      },
      "response": []
}
/*
 ! 根据市代码获取对应下属的区信息
*/
const getAreaName = {
      "description": "根据市代码获取对应下属的区信息",
      "request": {
            "method": "get",
            "url": `${MOUDLE_NAME}/area`
      },
      "params": {
            "cityCode": "市代码"
      },
      "response": []
}
/*
 ! 根据区代码查询，返回省市区三级信息封装
*/
const areaDto = {
      "description": "根据区代码查询，返回省市区三级信息封装",
      "request": {
            "method": "get",
            "url": `${MOUDLE_NAME}/area/areaDTO`
      },
      "params": {
            "areaCode": "区代码"
      },
      "response": []
}
export default {
      getProvinceName,
      getCityName,
      getAreaName,
      areaDto
}