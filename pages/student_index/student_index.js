var app = getApp();

Page({
    data: {
        userInfo: {
            avatarUrl: "",//用户头像  
            nickName: "",//用户昵称 
        }
    },
    onLoad: function () {
        var that = this;
        /**  
         * 获取用户信息  
         */
        wx.getUserInfo({
            success: function (res) {
                console.log(res);
                var avatarUrl = 'userInfo.avatarUrl';
                var nickName = 'userInfo.nickName';
                that.setData({
                    [avatarUrl]: res.userInfo.avatarUrl,
                    [nickName]: res.userInfo.nickName,
                })
            }
        })
    },
    onShow: function () {

    },
    onReady: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    getinfo: function() {
        wx.request({
            url: 'http://localhost:8080/courser',
            success: function(res) {
                console.log(res.data);
            }
        })
    }
})