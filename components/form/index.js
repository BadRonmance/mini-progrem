const app = getApp();
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        formData: {
            type: Object,
            value: {
                data: [{
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
                    imgs: [{
                        url: '图片回显地址'
                    }],
                    ruleData: {
                        reg: "校验规则",
                        message: "提示信息",
                    },
                }]
            }
        }
    },
    data: {

    },
    created() {},
    ready() {},
    methods: {
        formSubmit(e){
            console.log(e)
        }
    }
})