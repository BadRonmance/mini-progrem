// pages/login/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData:{
      data: [
        {
          id: "1",
          isRequire: false,
          isDisabled: false,
          type: "text",
          prop: "username",
          label: "账号",
          value: "",
          placeholder: "请输入手机号",
        },
        {
          id: "2",
          isRequire: false,
          isDisabled: false,
          type: "password",
          prop: "password",
          label: "密码",
          src: '../../assets/images/icon/eye_hide.png',
          password: true,
          value: "",
          placeholder: "请输入密码",
          lengthRule: '长度限制：6~10个字符',
          ruleData: [
              {
                  min: 6,
                  message: "最小输入6位"
              },
  
              {
                  max: 10,
                  message: "最大输入10位"
              }
          ],
        }
      ], 
      labelWidth: '120rpx',
      button: {
        text: '登录',
        width: '90%'
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  formSubmit(data){
    if(data.detail.length > 0){
      // for(let item of data.detail){
      //   if(item.prop == 'username' && !(/^1[3456789]d{9}$/.test(item.value))){
      //     app.toast('请输入正确手机号');
      //     break;
      //   }
      // }
      
      if(!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(data.detail[0].value))){
        return app.toast('请输入正确手机号');
      }
      if(!(data.detail[1].value)){
        return app.toast('请输入密码');
      }
      console.log(data.detail);
    }
  }
})