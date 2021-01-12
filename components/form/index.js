const app = getApp();
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        labelStyle: {
            type: Object,
            value: {
                align: "t_l",
            }
        },
        placeholderStyle: {
            type: Object,
            observer: function (val) {
                this.setData({
                    phStyle: wx.util.convertStyle(val)
                });
            },
        },
        formStyle: {
            type: Object,
            observer: function (val) {
                this.setData({
                    formItemStyle: wx.util.convertStyle(val)
                });
            },
        },
        formData: {
            type: Array,
            value: []
        }
    },
    data: {
        formItemStyle: "",
        formValue: []
    },
    attached() {
        let result = {}
        this.data.formData.map(item => {
            result[item.prop] = item.value
        })
        this.setData({
            formValue: result
        })
    },
    created() {},
    ready() {},
    methods: {
        changeValue(e) {
            let data = e.detail
            this.data.formValue[data.prop] = data.value
            this.triggerEvent("passValue", this.data.formValue)
        }
    }
})