// page/one/index.js
Page({
    data: {
        open: false,
        userInfo: {
            avatarUrl: "",//用户头像  
            nickName: "",//用户昵称 
        }
    },
    tap_ch: function (e) {
        if (this.data.open) {
            this.setData({
                open: false
            });
        } else {
            this.setData({
                open: true
            });
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
    courser_list: function() {
        wx.redirectTo({
            url: '../courser/courser',
        })
    },
    information: function() {
        wx.redirectTo({
            url: '../information/information',
        })
    }
})