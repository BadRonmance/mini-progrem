// pages/mechanismAuthentication/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData:{
      data: [
        {
          id: "1",
          isRequire: true,
          isDisabled: false,
          type: "text",
          prop: "name",
          label: "机构名称",
          value: "",
          placeholder: "请输入机构名称"
        },
        {
          id: "2",
          isRequire: true,
          isDisabled: false,
          type: "region",
          prop: "adress",
          label: "所在地址",
          value: "没办法，先这样",
          placeholder: "请输入机构地址"
        },
        {
          id: "3",
          isRequire: true,
          isDisabled: false,
          type: "text",
          prop: "adressDetails",
          label: "详细地址",
          value: "",
          placeholder: "请输入机构详细地址"
        },
        {
          id: "4",
          isRequire: true,
          isDisabled: false,
          type: "text",
          prop: "emial",
          label: "机构邮箱",
          value: "",
          placeholder: "请输入机构邮箱"
        },
        {
          id: "5",
          isRequire: true,
          isDisabled: false,
          type: "text",
          prop: "tel",
          label: "联系方式",
          value: "",
          placeholder: "请输入联系方式",
          ruleData: {
              reg: '^[1][3,4,5,7,8,9][0-9]{9}$',
              message: "请输入正确的手机号码",
          },
        },
        {
          id: "10",
          isRequire: true,
          isDisabled: false,
          type: "date",
          prop: "date",
          label: "出生年月",
          value: "",
          placeholder: "请选择出生年月",
        },
        {
          id: "11",
          isRequire: true,
          isDisabled: false,
          type: "select",
          prop: "date",
          label: "选择器",
          value: "1",
          text: '下拉选择1',
          placeholder: "请选择出生年月",
          selectData: [
            {
              name: '下拉选择1',
              id: '1'
            },{
              name: '下拉选择2',
              id: '2'
            }
          ]
        },
        {
          id: "12",
          isRequire: true,
          isDisabled: false,
          type: "select",
          prop: "date",
          label: "选择器",
          value: "",
          text: '',
          placeholder: "请选择",
          selectData: [
            {
              name: '下拉选择3',
              id: '3'
            },{
              name: '下拉选择4',
              id: '4'
            }
          ]
        },
        {
          id: "6",
          isRequire: true,
          isDisabled: false,
          type: "text",
          prop: "username",
          label: "法人姓名",
          value: "",
          placeholder: "请输入法人姓名",
        },
        {
          id: "7",
          isRequire: true,
          isDisabled: false,
          type: "img",
          prop: "img1",
          label: "法人身份证",
          value: "",
          placeholder: "请上传法人身份证照片",
          limit: 2,
          imgs: [],
        },
        {
          id: "8",
          isRequire: true,
          isDisabled: false,
          type: "img",
          prop: "img2",
          label: "营业执照",
          value: "",
          placeholder: "请上传营业执照",
          limit: 1,
          imgs: [],
        },
        {
          id: "9",
          isRequire: true,
          isDisabled: false,
          type: "textarea",
          prop: "desc",
          label: "简介",
          value: "",
          placeholder: "请输入简介",
        }
      ], 
      button: {
        text: '下一步',
        width: '90%'
      }
    },
    show: false,
    // date: ''
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
  backOne(){
    this.setData({
      show: false
    })
  },
  formSubmit(data){
    console.log(data);
    this.setData({
      show: true
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})