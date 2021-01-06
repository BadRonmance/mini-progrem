const app = getApp();
Component({
  properties: {
    formData: {
      type: Object,
      value: {
        data: [
          {
            id: "id",
            isRequire: '是否必填',
            isDisabled: '是否禁止输入',
            type: "类型",
            prop: "表单元素字段",
            label: "label",
            value: "值", 
            text: '下拉选择回填文字',
            placeholder: "请上传营业执照",
            limit: "上传图片限制",
            imgs: [
              {
                url: '图片回显地址'
              }
            ],
            ruleData: {
              reg: "校验规则",
              message: "提示信息",
            },
          }
        ],
        button: {
          width: '100%',
          text: '提交'
        }
      }
    }
  },
  data: {
    inputValue: '',
    regionValue: '',
    imgHide: '../../assets/images/icon/eye_hide.png',
    imgShow: '../../assets/images/icon/eye_show.png',
    verificationTime: 60,
    verificationFlag: true,
    regionAreaShow: false,
    areaList: {
      province_list: [],
      city_list: [],
      county_list: []
    },
    // dataBoxShow: false,
    // minDate: new Date(1944, 0, 1).getTime(),
    // maxDate: new Date().getTime(),
    // currentDate: '',
    // formatter(type, value) {
    //   if (type === 'year') {
    //     return `${value}年`;
    //   } else if (type === 'month') {
    //     return `${value}月`;
    //   }
    //   return value;
    // },
    // dataIndex: 0
  },
  created(){},
  ready(){
    let region = this.data.formData.data.findIndex( val=> val.type=='region');
    if(region != -1){
      this.getProvinceName();
      this.getCityName();
      this.getAreaName();
    }
    this.data.formData.data.map(item => {
      if(item.ruleData && item.ruleData.reg){
        item.ruleData.reg = new RegExp(item.ruleData.reg)
      }
    })
  },
  methods: {
    /**
     * 切换密码显示、隐藏
     */
    changeInputType(e){
      let index = e.currentTarget.dataset.index;
      let src = this.data.formData.data[index].src==this.data.imgHide?this.data.imgShow:this.data.imgHide;
      this.setData({
        ['formData.data['+index+'].src']: src,
        ['formData.data['+index+'].password']: this.data.formData.data[index].password==false?true:false
      });
    },
    /**
     * 获取验证码
     * @param {*表单数组下标} e 
     */
    getVerificationCode(e){
      // this.triggerEvent('changeFormItem',e.currentTarget.dataset.index);
      if(this.data.verificationFlag){
        let index = e.currentTarget.dataset.index;
        this.countTime(index);
      }else{
        app.toast('验证码已发送，请等待');
      }
    },
    /**
     * 60S倒计时
     */
    countTime(index){
      if(this.data.verificationTime > 0){
        this.data.verificationTime--;
        this.data.verificationFlag = false;
        this.setData({
          ['formData.data['+index+'].verificationCode.text']: this.data.verificationTime+'s后重新发送'
        });
        let that = this;
        setTimeout(()=>{
          that.countTime(index);
        },1000);
      }else{
        this.data.verificationTime = 60;
        this.data.verificationFlag = true;
          this.setData({
            ['formData.data['+index+'].verificationCode.text']: '重新获取验证码'
          });
      }
    },
    /**
     * 显示省市区选择框
     */
    regionArea(e){
      this.setData({
        regionAreaShow: e.currentTarget.dataset.isshow
      });
    },
    // bindRegionChange: function (e) {
    //   let index = this.data.formData.data.findIndex( val=> val.type=='region');
    //   this.setData({
    //     ['formData.data['+index+'].value']: e.detail.value
    //   });
    // },
    /**
     * 获取省市区
     */
    async getProvinceName(){
      let res = await app.http({
        url: `${wx.api.getProvinceName.request.url}`,
        data:{}
      });
      if(res){
        this.setData({
          ['areaList.province_list']: res.data
        })
      }
    },
    async getCityName(){
      let res = await app.http({
        url: `${wx.api.getCityName.request.url}`,
        data:{}
      });
      if(res){
        this.setData({
          ['areaList.province_list']: res.data
        })
      }
    },
    async getAreaName(){
      let res = await app.http({
        url: `${wx.api.getAreaName.request.url}`,
        data:{}
      });
      if(res){
        this.setData({
          ['areaList.province_list']: res.data
        })
      }
    },
    // 表单上传图片修改
    changeImg(data){
      if(data.detail.imgs.length > 0){
        let imgsArr = [];
        for(let item of data.detail.imgs){
          imgsArr.push(item.url);
        }
        this.data.formData.data.map( item => {
          if(item.prop == data.detail.prop){
            item.value = imgsArr.join(',');
            item.imgs = data.detail.imgs
          }
        });
      }
    },
    /**
     * 日期选择器弹出层显示，隐藏
     */
    // onDisplay(e){
    //   let index = e.currentTarget.dataset.index;
    //   let currentDate = this.data.formData.data[index].value;
    //   this.setData({
    //     currentDate: currentDate?wx.util.timeStamp(currentDate):new Date().getTime(),
    //     dataBoxShow: e.currentTarget.dataset.isshow,
    //     dataIndex: index
    //   })
    // },
    /**
     * 日期回填
     */
    // changeDate(e){
    //   let date = wx.util.formatDateB(e.detail);
    //   let index = e.currentTarget.dataset.index;
    //   this.setData({
    //     dataBoxShow: false,
    //     ['formData.data['+index+'].value']: date
    //   })
    // },
    // onInput(event) {
    //   this.setData({
    //     currentDate: event.detail,
    //   });
    // },
    /**
     * 日期选择器改变事件
     */
    bindDateChange(e){
      let index = e.currentTarget.dataset.index;
      this.setData({
        ['formData.data['+index+'].value']: e.detail.value
      })
    },
    /**
     * 下拉选择改变事件
     */
    bindPickerChange(e){
      let index = e.currentTarget.dataset.index;
      let val = this.data.formData.data[index].selectData[e.detail.value].name;
      this.setData({
        ['formData.data['+index+'].value']: this.data.formData.data[index].selectData[e.detail.value],
        ['formData.data['+index+'].text']: val
      });
    },
    formSubmit(e){
      let sum = 0;
      this.data.formData.data.map(val => {
        if(val.type != 'img' && val.type != 'region' && val.type != 'data'){
          val.value = e.detail.value[val.prop]
        }
      });
      for(let item of this.data.formData.data){
        if(item.isRequire){
          if(item.ruleData && !((item.ruleData.reg).test(item.value))){
              app.toast(item.ruleData.message);
              sum++;
              break;
          }
          if(!item.value){
            app.toast(item.placeholder);
            sum++;
            break;
          }
          if(item.limit && item.limit != item.imgs.length){
            app.toast(item.placeholder+item.limit+'张');
            sum++;
            break;
          }
        }
      }
      // if(sum==0){
        this.triggerEvent('formSubmit',this.data.formData.data);
      // }
    }
  }
})