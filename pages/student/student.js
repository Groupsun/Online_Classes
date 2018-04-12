Page({
    data: {
        items: [
            { name: 'M', value: '男' },
            { name: 'L', value: '女', checked: 'true' }
        ]
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
        wx.redirectTo({
            url: '../student_index/student_index',
        })
    }
})