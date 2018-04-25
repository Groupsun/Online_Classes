const app = getApp();

Page({
    data: {
        items: [
            { name: 'Male', value: '男' },
            { name: 'Female', value: '女', checked: 'true' }
        ],
        tea_id: '',
        tea_name: '',
        tea_birth: '',
        tea_sex: ''
    },
    onLoad: function () {

    },
    onShow: function () {

    },
    onReady: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    submit: function () {
        console.log(this.data);

        wx.request({
            url: 'https://www.sunnychen.top/register',
            data: {
                "user_openid": app.globalData.openid,
                "user_id": this.data.tea_id,
                "user_birthday": this.data.tea_birth,
                "user_role": 1,
                "user_sex": this.data.tea_sex,
                "user_name": this.data.tea_name
            }
        })

        wx.redirectTo({
            url: '../teacher_index/teacher_index',
        })
    },
    tea_id: function (e) {
        this.setData({
            tea_id: e.detail.value
        })
    },
    tea_name: function (e) {
        this.setData({
            tea_name: e.detail.value
        })
    },
    tea_birth: function (e) {
        console.log(e.detail.value);
        this.setData({
            tea_birth: e.detail.value
        })
    },
    tea_sex: function (e) {
        this.setData({
            tea_sex: e.detail.value
        })
    }
})