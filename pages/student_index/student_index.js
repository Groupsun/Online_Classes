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
    tap_start: function (e) {
        // touchstart事件
        this.data.mark = this.data.newmark = e.touches[0].pageX;
    },
    tap_drag: function (e) {
        // touchmove事件

        /*
         * 手指从左向右移动
         * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
         */
        this.data.newmark = e.touches[0].pageX;
        if (this.data.mark < this.data.newmark) {
            this.istoright = true;
        }
        /*
         * 手指从右向左移动
         * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
         */
        if (this.data.mark > this.data.newmark) {
            this.istoright = false;

        }
        this.data.mark = this.data.newmark;

    },
    tap_end: function (e) {
        // touchend事件
        this.data.mark = 0;
        this.data.newmark = 0;
        if (this.istoright) {
            this.setData({
                open: true
            });
        } else {
            this.setData({
                open: false
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