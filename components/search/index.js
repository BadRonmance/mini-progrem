// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    system: {
      type: Object,
      value: {
        placeholderText: '', //输入框提示文字
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
     showClose:false,
     serachValue:''
  },
  attached() {
   
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 监听输入框输入的内容
    changeSearch(e){
      console.log(e.detail.value)
      let value=e.detail.value
      if(value.length){
        this.setData({
          showClose:true
        })
      }else{
        this.setData({
          showClose:false
        })
      }
    },
    // 清除input 值
    clearValue(){
      this.setData({
        showClose:false,
        serachValue:''
      })
    },
    // 搜索
    searchFun(){
    }
  
  }
})