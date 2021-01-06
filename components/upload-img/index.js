// components/upload-img/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgVal: {
      type: Object,
      value: 
        {
          imgs: [{
              name: '',
              url: ''
          }],
          limit: 2,//限制张数
          value: '',
          // notIcon: '',
          // time: 'cars0'
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
    // beforeRead(e){
    //   console.log(e.detail);
    //   // this.setData({
    //   //   ['imgVal.imgs['+e.detail.index+'].url']: e.detail.file.url
    //   // })
    // },
    /**
     * 上传文件
     * @param {*文件对象} e 
     */
    afterRead(e){
      // console.log(e.detail);
      this.setData({
        ['imgVal.imgs['+e.detail.index+'].url']: e.detail.file.url
      });
      this.triggerEvent('changeImg',this.data.imgVal);
    },
    delete(e){
      this.data.imgVal.imgs.splice(e.detail.index,1)
      this.setData({
        ['imgVal.imgs']: this.data.imgVal.imgs
      });
      this.triggerEvent('changeImg',this.data.imgVal);
    }
  }
})
