const app = getApp();

Page({
    data: {
        items: [
            { name: 'Male', value: '男' },
            { name: 'Female', value: '女', checked: 'true' }
        ],
        stu_id: '',
        stu_name: '',
        stu_birth: '',
        stu_sex: ''
    },
    onLoad: function(){

    },
    onShow: function(){

    },
    onReady: function(){

    },
    onHide: function(){

    },
    onUnload: function(){

    },
    submit: function(){
        console.log(this.data);
        
        wx.request({
            url: 'http://47.106.66.176:8081/register',
            data:{
                "user_openid": app.globalData.openid,
                "user_id": this.data.stu_id,
                "user_birthday": this.data.stu_birth,
                "user_role": 0,
                "user_sex": this.data.stu_sex,
                "user_name": this.data.stu_name
            }
        })
        
        wx.redirectTo({
            url: '../student_index/student_index',
        })
    },
    stu_id: function(e) {
        this.setData({
            stu_id: e.detail.value
        })
    },
    stu_name: function(e) {
        this.setData({
            stu_name: e.detail.value
        })
    },
    stu_birth: function(e) {
        console.log(e.detail.value);
        this.setData({
            stu_birth: e.detail.value
        })
    },
    stu_sex: function(e) {
        this.setData({
            stu_sex: e.detail.value
        })
    }
})