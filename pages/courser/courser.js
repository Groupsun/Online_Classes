// page/one/index.js
var list;

Page({
    data: {
        open: false,
        list: null
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
        wx.request({
            url: 'http://47.106.66.176:8081/courser',
            success: function(res) {
                that.setData({
                    list: res.data
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
    student_index: function() {
        wx.redirectTo({
            url: '../student_index/student_index',
        })
    }
})