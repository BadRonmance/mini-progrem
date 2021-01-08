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
        formStyle: {
            type: Object,
            observer: function (val) {
                let result = []
                Object.entries(val).map(item => {
                    result.push(`${item[0]}:${item[1]}`)
                })
                this.setData({
                    formItemStyle: result.join(";")
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
        console.log(result)
        this.setData({
            formValue: result
        })
    },
    created() { },
    ready() { },
    methods: {
        changeValue(e) {
            let data = e.detail
            this.data.formValue[data.prop] = data.value
            this.triggerEvent("passValue", this.data.formValue)
        }
    }
})