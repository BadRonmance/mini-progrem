// components/form/area/area-picker/index.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
            columnsNum: {
                  type: Number,
                  desc: "piker列数",
                  value: 3
            },
            areaList: {
                  type: Object,
                  value: {
                        province_list: {
                              110000: '北京市',
                              120000: '天津市'
                        },
                        city_list: {
                              110100: '北京市',
                              110200: '县',
                              120100: '天津市',
                              120200: '县'
                        },
                        county_list: {
                              110101: '东城区',
                              110102: '西城区',
                              110105: '朝阳区',
                              110106: '丰台区',
                              120101: '和平区',
                              120102: '河东区',
                              120103: '河西区',
                              120104: '南开区',
                              120105: '河北区',
                        },
                  }
            }
      },

      /**
       * 组件的初始数据
       */
      data: {

      },

      /**
       * 组件的方法列表
       */
      methods: {
            cancel() {
                  this.triggerEvent('cancel')
            },
            confirm(e) {
                  this.triggerEvent('confirm', e.detail.values);
            }
      }
})